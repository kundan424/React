import { use } from "react";
import conf from "../conf/conf";
import { Client, Databases, ID, Storage, Query } from "appwrite";

export class Service {
    client = new Client()
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, {
                title,
                content,
                featuredImage,
                status,
                userId,
            }
            )
        } catch (error) {
            console.log(error)
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log(error)
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true;
        } catch (error) {
            console.log(error);
        }
        return false;
    }

    async getPost(slug){
        try {
            await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,  
            )
        } catch (error) {
            console.log(error)
            
        }
    }
    
// this list all the documents wheather their status is active or not 
    // async getPosts(){
    //     try {
    //         await this.databases.listDocuments(
    //             conf.appwriteDatabaseId,
    //             conf.appwriteCollectionId,
    //             slug,
    //         )
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
     
    async getPosts(queries = [Query.equal("status" , "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries, 
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error" , error)
        }

    }

// FILE UPLOAD

    async uploadFile(file){
        try {
            await this.bucket.createFile(
                conf.appwriteBucketId , 
                ID.unique() ,
                file,
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error" , error)
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                appwriteBucketId, 
                fileId ,
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error" , error)
            
        }
    }
     
    getfilePreview(fileId){
        return this.bucket.getfilePreview(
            appwriteBucketId , 
            fileId , 
        )
    }
}


const service = new Service();
export default service