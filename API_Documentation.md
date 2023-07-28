# MID TERM GABRYELLA APRIANI SINAGA TOKOPEDIA PLAY CLONE

## API Documentation

### 1) GET api/video-thumbnails

Mengembalikan semua video thumbnail

- url params (none)
- headers
  - Content-Type: application/json
- success response
  - content
    ```json
    {
    "status": "success",
    "data": {
        "videoThumbnailList": []
    }
    ```


### 2) GET api/products/{video-id}

Mengembalikan semua product berdasarkan id video thumbnail

- url params 
  - /{video-id}
- headers
  - Content-Type: application/json
- success response
  - content
    ```json
    {
      "status": "success",
      "data": {
          "products": []
      }
    }
    ```



### 3) GET api/comments/{video-id}

Mengembalikan semua comment berdasarkan id video thumbnail

- url params
  - /{video-id}
- headers
  - Content-Type: application/json
- success response
  - content
    ```json
    {
      "status": "success",
      "data": {
          "comments": []
      }
    }
    ```

### 4) POST api/comments/{video-id}
Membuat video comment baru berdasarkan id video thumbnail

- url params
  - /{video-id}
- headers
  - Content-Type: application/json
- body
  - content
    ```json
    {
      "username": "username",
      "comment": "lorem ipsum"
    }
    ```
- success response
  - content
    ```json
    {
      "status": "success",
      "data": {
          "comment": {
              "username": "username",
              "comment": "lorem ipsum",
              "timestamp": "2023-07-28T04:05:40.064Z",
              "videoThumbnailId": "64c3277268a7ec27e67c554d",
              "_id": "64c33e9427368397e4ce130d",
              "__v": 0
          }
      }
    }
    ```
