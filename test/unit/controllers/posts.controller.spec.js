const PostsController = require('../../../controllers/posts.controller');

const {
  requestParams,
  responseLocalsUser,
  createPostInput,
  createPostOutput,
  updatePostInput,
  updatePostOutput,
} = require('../../fixtures/post.fixtures');

const mockPostService = () => ({
  findAllPost: jest.fn(),
  findPostByID: jest.fn(),
  createPost: jest.fn(),
  updatePost: jest.fn(),
  deletePost: jest.fn(),
});

let mockRequest = {
  body: jest.fn(),
  params: jest.fn(),
};

let mockResponse = {
  locals: jest.fn(),
  status: jest.fn(),
  json: jest.fn(),
};

describe('posts.controller Layer Test', () => {
  let postController = new PostsController();
  postController.postService = mockPostService();

  beforeEach(() => {
    // 모든 Mock을 초기화합니다.
    jest.resetAllMocks();
  });

  test('createPost Success Case', async () => {
    mockRequest.body = createPostInput;
    mockResponse.locals.user = responseLocalsUser;
    mockResponse.status = jest.fn(() => {
      return mockResponse;
    });

    postController.postService.createPost = jest.fn(() => {
      return createPostOutput;
    });

    await postController.createPost(mockRequest, mockResponse);

    // createPost 메소드는 몇번 호출되었는지
    expect(postController.postService.createPost).toHaveBeenCalledTimes(1);

    // createPost staus는 몇번 호출되는가
    expect(mockResponse.status).toHaveBeenCalledTimes(1);

    // createPost staus의 반환값을 무엇인가.
    expect(mockResponse.status).toHaveBeenCalledWith(201);

    // createPost json은 몇번 호출되는가.
    expect(mockResponse.json).toHaveBeenCalledTimes(1);

    // createPost json의 반환값을 무엇인가.
    expect(mockResponse.json).toHaveBeenCalledWith({
      data: createPostOutput,
      message: '게시글을 생성하였습니다.',
    });
  });

  test('getPosts Success Case', async () => {
    mockResponse.status = jest.fn(() => {
      return mockResponse;
    });

    const 게시글목록조회결과 = [];
    postController.postService.findAllPost = jest.fn(() => {
      return 게시글목록조회결과;
    });

    await postController.getPosts(mockRequest, mockResponse);

    // getPosts 메소드는 몇번 호출되었는지
    expect(postController.postService.findAllPost).toHaveBeenCalledTimes(1);

    // getPosts staus는 몇번 호출되는가
    expect(mockResponse.status).toHaveBeenCalledTimes(1);

    // getPosts staus의 반환값을 무엇인가.
    expect(mockResponse.status).toHaveBeenCalledWith(200);

    // getPosts json은 몇번 호출되는가.
    expect(mockResponse.json).toHaveBeenCalledTimes(1);

    // getPosts json의 반환값을 무엇인가.
    expect(mockResponse.json).toHaveBeenCalledWith({
      data: 게시글목록조회결과,
    });
  });

  test('getPostById Success Case', async () => {
    mockRequest.params = requestParams;
    mockResponse.status = jest.fn(() => {
      return mockResponse;
    });

    const 게시글상세조회결과 = [];
    postController.postService.findPostById = jest.fn(() => {
      return 게시글상세조회결과;
    });

    await postController.getPostById(mockRequest, mockResponse);

    // getPostById 메소드는 몇번 호출되었는지
    expect(postController.postService.findPostById).toHaveBeenCalledTimes(1);

    // getPostById staus는 몇번 호출되는가
    expect(mockResponse.status).toHaveBeenCalledTimes(1);

    // getPostById staus의 반환값을 무엇인가.
    expect(mockResponse.status).toHaveBeenCalledWith(200);

    // getPostById json은 몇번 호출되는가.
    expect(mockResponse.json).toHaveBeenCalledTimes(1);

    // getPostById json의 반환값을 무엇인가.
    expect(mockResponse.json).toHaveBeenCalledWith({
      data: 게시글상세조회결과,
    });
  });

  test('updatePost sucesscase', async () => {
    mockRequest.params = requestParams;
    mockRequest.body = updatePostInput;
    mockResponse.locals.user = responseLocalsUser;
    mockResponse.status = jest.fn(() => {
      return mockResponse;
    });

    postController.postService.updatePost = jest.fn(() => {
      return updatePostOutput;
    });

    await postController.updatePost(mockRequest, mockResponse);
    // updatePost는 몇번 호출되는가
    expect(postController.postService.updatePost).toHaveBeenCalledTimes(1);

    // updatePost staus는 몇번 호출되는가
    expect(mockResponse.status).toHaveBeenCalledTimes(1);

    // updatePost staus의 반환값을 무엇인가.
    expect(mockResponse.status).toHaveBeenCalledWith(200);

    // updatePost json은 몇번 호출되는가.
    expect(mockResponse.json).toHaveBeenCalledTimes(1);

    // updatePost json의 반환값을 무엇인가.
    expect(mockResponse.json).toHaveBeenCalledWith({
      data: updatePostOutput,
      message: '게시글을 수정하였습니다.',
    });
  });

  test('deletePost sucesscase', async () => {
    mockRequest.params = requestParams;
    mockResponse.locals.user = responseLocalsUser;
    mockResponse.status = jest.fn(() => {
      return mockResponse;
    });

    const 게시글삭제결과 = []
    postController.postService.deletePost = jest.fn(() => {
      return 게시글삭제결과;
    });

    await postController.deletePost(mockRequest, mockResponse);
    // updatePost는 몇번 호출되는가
    expect(postController.postService.deletePost).toHaveBeenCalledTimes(1);

    // updatePost staus는 몇번 호출되는가
    expect(mockResponse.status).toHaveBeenCalledTimes(1);

    // updatePost staus의 반환값을 무엇인가.
    expect(mockResponse.status).toHaveBeenCalledWith(200);

    // updatePost json은 몇번 호출되는가.
    expect(mockResponse.json).toHaveBeenCalledTimes(1);

    // updatePost json의 반환값을 무엇인가.
    expect(mockResponse.json).toHaveBeenCalledWith({
      data: 게시글삭제결과,
      message: '게시글을 삭제하였습니다.',
    });
  });
});
