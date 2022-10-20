const PostRepository = require('../../../repositories/posts.repository');
const { Op } = require('sequelize');

const {
    requestParams,
    responseLocalsUser,
    createPostInput,
    createPostOutput,
    updatePostInput,
    updatePostOutput,
  } = require('../../fixtures/post.fixtures');

const mockPostModel = ()=> ({
    findAll: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    findByPk: jest.fn(),
    update: jest.fn(),
    destroy: jest.fn(),
  });

describe('posts rpository Layer Test', ()=>{
 let postRepository = new PostRepository
 postRepository.Post = mockPostModel()

 beforeEach(() => {
    // 모든 Mock을 초기화합니다.
    jest.resetAllMocks();
  });

  test('createPost Success Case', async () => {

    postRepository.Post.create = jest.fn(() => {
        return createPostOutput;
      });

    const {userId, nickname, title, content} = createPostInput  

    const createPostData = await postRepository.createPost(userId, nickname, title, content);

    // create 메소드는 몇번 호출되었는지
    expect(postRepository.Post.create).toHaveBeenCalledTimes(1);

    // createPost 결과 비교
    expect(createPostData).toEqual(createPostOutput)

    // createPost 메소드가 호출된 인자를 검증.
    expect(postRepository.Post.create).toHaveBeenCalledWith(
        {userId, nickname, title, content}
    );
  });

  test('findAllPost success case', async () => {
    const 게시글목록조회 = [];
    postRepository.Post.findAll = jest.fn(()=>{
        return 게시글목록조회
    })

    const posts = await postRepository.findAllPost({});

    // findAll 메소드는 몇번 호출되었는지
    expect(postRepository.Post.findAll).toHaveBeenCalledTimes(1);

   // findAllPost의 리턴값 비교     
    expect(posts).toEqual(게시글목록조회);

    // findAll 메소드가 호출된 인자를 검증합니다.
    expect(postRepository.Post.findAll).toHaveBeenCalledWith({});
  });


  test('findPostById success case', async () => {
    postRepository.Post.findByPk = jest.fn(()=>{
        return createPostOutput})

    const postId = 1
    const post = await postRepository.findPostById(postId);

    // findByPk 메소드는 몇번 호출되었는지
    expect(postRepository.Post.findByPk).toHaveBeenCalledTimes(1);

    // findPostById 결과비교
    expect(post).toEqual(createPostOutput)

    // // findByPk 메소드가 호출된 인자를 검증합니다.
    // expect(PostRepository.Post.findByPk).toHaveBeenCalledWith(
    //   postId
    // );
  });

  test('updatePost sucesscase', async () => {
    postRepository.Post.update = jest.fn(()=>{
        return updatePostOutput
    })

    const {postId, userId, title, content} = updatePostInput

    const updatePostData = await postRepository.updatePost(postId, userId, title, content);
    // updatePost는 몇번 호출되는가
    expect(postRepository.Post.update).toHaveBeenCalledTimes(1);

    //updatePost 결과비교
    expect(updatePostData).toEqual(updatePostOutput)

    // Post.update 에 입력된 값이 내가 생각한 값과 일치하는가.
    expect(postRepository.Post.update).toHaveBeenCalledWith(
        { title, content },
        { where: { postId, userId } }
    );
  });

  test('deletePost sucesscase', async () => {
    postRepository.Post.destroy = jest.fn(()=>{
        return updatePostOutput
    })

    const {postId, userId} = updatePostInput

    const deletePostData = await postRepository.deletePost(postId, userId);
    // updatePost는 몇번 호출되는가
    expect(postRepository.Post.destroy).toHaveBeenCalledTimes(1);

    //updatePost 결과비교
    expect(deletePostData).toEqual(updatePostOutput)

    // Post.delete 에 입력된 값이 내가 생각한 값과 일치하는가.
    expect(postRepository.Post.destroy).toHaveBeenCalledWith(
        { where: { postId, userId } }
    );
  });

})
