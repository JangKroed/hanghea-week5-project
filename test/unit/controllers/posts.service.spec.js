const PostService = require('../../../services/posts.service');

const {
    requestParams,
    responseLocalsUser,
    createPostInput,
    createPostOutput,
    updatePostInput,
    updatePostOutput,
  } = require('../../fixtures/post.fixtures');

const mockPostRepository = () => ({
    findAllPost: jest.fn(),
    findPostByID: jest.fn(),
    createPost: jest.fn(),
    updatePost: jest.fn(),
    deletePost: jest.fn(),
  });

describe('post service Layer Test', ()=>{
    let postService = new PostService()
    postService.postRepository = Object.assign({}, mockPostRepository)
    
    beforeEach(() => {
        // restore the spy created with spyOn
        jest.resetAllMocks();
      });
    
    test('findAllPost success case', async () => {
        const 게시글목록조회 = [];
        postService.postRepository.findAllPost = jest.fn(()=>{
            return 게시글목록조회
        })
    
        const allPost = await postService.findAllPost();
    
        // findAll 메소드는 몇번 호출되었는지
        expect(postService.postRepository.findAllPost).toHaveBeenCalledTimes(1);
    
       // findAllPost의 리턴값 비교     
        expect(allPost).toEqual(게시글목록조회);
    
        // findAllPost 메소드가 호출된 인자를 검증합니다.
        expect(postService.postRepository.findAllPost).toHaveBeenCalledWith();
      });
    
    
  test('findPostById success case', async () => {
    
    postService.postRepository.findPostById = jest.fn(()=>{
        return createPostOutput})

    const postId = 1
    const post = await postService.findPostById(postId);

    // findByPk 메소드는 몇번 호출되었는지
    expect(postService.postRepository.findPostById).toHaveBeenCalledTimes(1);

    // findPostById 결과비교
    expect(post).toEqual(createPostOutput)

    // findByPk 메소드가 호출된 인자를 검증합니다.
    expect(postService.postRepository.findPostById).toHaveBeenCalledWith(
      postId
    );
  });


    test('createPost sucess case ', async()=>{

        postService.postRepository.createPost = jest.fn(() => {
            return createPostOutput;
          }); 


        const {userId, nickname, title, content} = createPostInput  
        const createPostData = await postService.createPost(userId, nickname, title, content) 
           
        // create 메소드는 몇번 호출되었는지
        expect(postService.postRepository.createPost).toHaveBeenCalledTimes(1);
        
        // createPost 결과 비교
        expect(createPostData).toEqual(createPostOutput)

        // createPost 메소드가 호출된 인자를 검증.
        expect(postService.postRepository.createPost).toHaveBeenCalledWith(
        userId, nickname, title, content
        );
          
    })  

    test('updatePost sucesscase', async () => {
        postService.postRepository.updatePost = jest.fn(()=>{
            return updatePostOutput
        })

        postService.postRepository.findPostById = jest.fn(()=> {
            return updatePostOutput
        })  
    
        const {postId, userId, title, content} = updatePostInput
    
        const updatePostData = await postService.updatePost(postId, userId, title, content);
        
        // updatePost는 몇번 호출되는가
        expect(postService.postRepository.updatePost).toHaveBeenCalledTimes(1);
    
        //updatePost 결과비교
        expect(updatePostData).toEqual(updatePostOutput)
    
        //postService.updatePost 에 입력된 값이 내가 생각한 값과 일치하는가.
        expect(postService.postRepository.updatePost).toHaveBeenCalledWith(
            postId, userId, title, content
        );
      });
    
      test('deletePost sucesscase', async () => {
        postService.postRepository.deletePost = jest.fn(()=>{
            return updatePostOutput
        })

        postService.postRepository.findPostById = jest.fn(()=> {
            return updatePostOutput
        })  
    
        const {postId, userId} = updatePostInput
    
        const deletePostData = await postService.deletePost(postId, userId);

        // deletePost는 몇번 호출되는가
        expect(postService.postRepository.deletePost).toHaveBeenCalledTimes(1);
    
        //updatePost 결과비교
        expect(deletePostData).toEqual(updatePostOutput)
    
        // postService.deletePost 에 입력된 값이 내가 생각한 값과 일치하는가.
        expect(postService.postRepository.deletePost).toHaveBeenCalledWith(
            postId, userId
        );
      });


})  