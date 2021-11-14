# tabbook-blog set up guide
Step 1: npm install (for install all packages need in file package.json <br> 
Step 2: add file .env in root directory (content of this file is already sent you personally) <br>

## API List
1. Add post: http://localhost:3000/admin/add-post/ (method: POST) <br>
2. Get all posts: http://localhost:3000/admin/all-posts/ (method: GET) <br>
3. Update one post: http://localhost:3000/admin/update-post/ (method: PUT. Remember to specify ID of post in the url: eg: http://localhost:3000/admin/update-post/abczyzada (id is from get all post api) <br>
4. Delete one post: http://localhost:3000/admin/delete-post/ (method: DELETE. Remember to specify ID of post in the url: eg: http://localhost:3000/admin/delete-post/abczyzada))<br>
