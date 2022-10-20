/** Posts Controller Fixtures **/

exports.requestParams = {
  postId : 1,
  
}

exports.responseLocalsUser = {
  userId : 1,
  nickname : 'test'
}

exports.createPostInput = {
    userId : 1,
    nickname : 'test',
    title : '테스트해봄',
    content: 
    `test의 어원. 14c 후반, 고대 프랑스어에서test는 "귀금속 분석에 사용되는 작은 용기"라는 뜻이었습니다.
    이는 라틴어의 testum "질그릇", testa "불에 탄 점토 조각, 질그릇, 벽돌, 타일, 조개껍데기"에서 유래합니다. 
    그러던 것이 18세기 이후 근대에 들어 금은 가공실험과 연관돼 쓰임새가 변했습니다. 
    어쨌든 적어도 어원산 test는 어떤 지난한 노동과 관련이 깊습니다.  
    <이반 데니소비치의 하루>라는 소설에서, 수용소에 갇힌 이반 데니소비치 슈포흐(이하 슈호프)는 매일 같이 강제노동을 하고 감시받습니다. 그런데 역설적으로, 이 강제노동이 끔찍한 환경에 놓인 주인공에게 유일한 자유의 시간이 됩니다. 벽돌 하나 하나 쌓는 동안 만큼은 아무도 건드리지 않습니다.
    심지어 벽돌을 완성해가는 일이 즐겁습니다. 뭐 어차피 노동이 끝나고 돌아가도 기다리는 것은 생지옥 뿐이니까요.
    하지만 이는 노동이 갖는 가장 물질적 차원의 토대를 보여주는 장면이기도 합니다.
    벽돌 하나 하나, 엑셀 테이블의 빈칸 하나 하나를 채워가는 일은 사실 자아를 채워가는 일입니다.
    사람의 자아는 생각만큼 복잡하지 않습니다. 적어도 그 스스로의 상상과 감정보다는 훨씬 간단합니다. 
    test 벽돌은, 반복적으로 무엇인가 채워가는 행위입니다. 
    무엇이 채워질까요? 코드의 자아가 채워질 수도 있고, 각 객체의 자아가 채워질 수도 있고, 개발자의 자아가 채워질 수도...
    아냐, 개발자의 자아는 박살날 거 같아. 질그릇처럼.`

  };


  exports.createPostOutput = {
  
    userId: 1,
    nickname: 'test',
    title: '테스트해봄',
    content: 
    `test의 어원. 14c 후반, 고대 프랑스어에서test는 "귀금속 분석에 사용되는 작은 용기"라는 뜻이었습니다.
    이는 라틴어의 testum "질그릇", testa "불에 탄 점토 조각, 질그릇, 벽돌, 타일, 조개껍데기"에서 유래합니다. 
    그러던 것이 18세기 이후 근대에 들어 금은 가공실험과 연관돼 쓰임새가 변했습니다. 
    어쨌든 적어도 어원산 test는 어떤 지난한 노동과 관련이 깊습니다.  
    <이반 데니소비치의 하루>라는 소설에서, 수용소에 갇힌 이반 데니소비치 슈포흐(이하 슈호프)는 매일 같이 강제노동을 하고 감시받습니다. 그런데 역설적으로, 이 강제노동이 끔찍한 환경에 놓인 주인공에게 유일한 자유의 시간이 됩니다. 벽돌 하나 하나 쌓는 동안 만큼은 아무도 건드리지 않습니다.
    심지어 벽돌을 완성해가는 일이 즐겁습니다. 뭐 어차피 노동이 끝나고 돌아가도 기다리는 것은 생지옥 뿐이니까요.
    하지만 이는 노동이 갖는 가장 물질적 차원의 토대를 보여주는 장면이기도 합니다.
    벽돌 하나 하나, 엑셀 테이블의 빈칸 하나 하나를 채워가는 일은 사실 자아를 채워가는 일입니다.
    사람의 자아는 생각만큼 복잡하지 않습니다. 적어도 그 스스로의 상상과 감정보다는 훨씬 간단합니다. 
    test 벽돌은, 반복적으로 무엇인가 채워가는 행위입니다. 
    무엇이 채워질까요? 코드의 자아가 채워질 수도 있고, 각 객체의 자아가 채워질 수도 있고, 개발자의 자아가 채워질 수도...
    아냐, 개발자의 자아는 박살날 거 같아. 질그릇처럼.`
  };
  
  exports.updatePostInput = {
    postId: 1,
    userId: 1,
    title : '수정해봄',
    content: 
    `test의 어원. 14c 후반, 고대 프랑스어에서test는 "귀금속 분석에 사용되는 작은 용기"라는 뜻이었습니다.
    이는 라틴어의 testum "질그릇", testa "불에 탄 점토 조각, 질그릇, 벽돌, 타일, 조개껍데기"에서 유래합니다. 
    그러던 것이 18세기 이후 근대에 들어 금은 가공실험과 연관돼 쓰임새가 변했습니다. 
    어쨌든 적어도 어원산 test는 어떤 지난한 노동과 관련이 깊습니다.  
    <이반 데니소비치의 하루>라는 소설에서, 수용소에 갇힌 이반 데니소비치 슈포흐(이하 슈호프)는 매일 같이 강제노동을 하고 감시받습니다. 그런데 역설적으로, 이 강제노동이 끔찍한 환경에 놓인 주인공에게 유일한 자유의 시간이 됩니다. 벽돌 하나 하나 쌓는 동안 만큼은 아무도 건드리지 않습니다.
    심지어 벽돌을 완성해가는 일이 즐겁습니다. 뭐 어차피 노동이 끝나고 돌아가도 기다리는 것은 생지옥 뿐이니까요.
    하지만 이는 노동이 갖는 가장 물질적 차원의 토대를 보여주는 장면이기도 합니다.
    벽돌 하나 하나, 엑셀 테이블의 빈칸 하나 하나를 채워가는 일은 사실 자아를 채워가는 일입니다.
    사람의 자아는 생각만큼 복잡하지 않습니다. 적어도 그 스스로의 상상과 감정보다는 훨씬 간단합니다. 
    test 벽돌은, 반복적으로 무엇인가 채워가는 행위입니다. 
    무엇이 채워질까요? 코드의 자아가 채워질 수도 있고, 각 객체의 자아가 채워질 수도 있고, 개발자의 자아가 채워질 수도...
    아냐, 개발자의 자아는 박살날 거 같아. 질그릇처럼.`
  };  


  exports.updatePostOutput = {
    postId: 1,
    userId: 1,
    title : '수정해봄',
    content: 
    `test의 어원. 14c 후반, 고대 프랑스어에서test는 "귀금속 분석에 사용되는 작은 용기"라는 뜻이었습니다.
    이는 라틴어의 testum "질그릇", testa "불에 탄 점토 조각, 질그릇, 벽돌, 타일, 조개껍데기"에서 유래합니다. 
    그러던 것이 18세기 이후 근대에 들어 금은 가공실험과 연관돼 쓰임새가 변했습니다. 
    어쨌든 적어도 어원산 test는 어떤 지난한 노동과 관련이 깊습니다.  
    <이반 데니소비치의 하루>라는 소설에서, 수용소에 갇힌 이반 데니소비치 슈포흐(이하 슈호프)는 매일 같이 강제노동을 하고 감시받습니다. 그런데 역설적으로, 이 강제노동이 끔찍한 환경에 놓인 주인공에게 유일한 자유의 시간이 됩니다. 벽돌 하나 하나 쌓는 동안 만큼은 아무도 건드리지 않습니다.
    심지어 벽돌을 완성해가는 일이 즐겁습니다. 뭐 어차피 노동이 끝나고 돌아가도 기다리는 것은 생지옥 뿐이니까요.
    하지만 이는 노동이 갖는 가장 물질적 차원의 토대를 보여주는 장면이기도 합니다.
    벽돌 하나 하나, 엑셀 테이블의 빈칸 하나 하나를 채워가는 일은 사실 자아를 채워가는 일입니다.
    사람의 자아는 생각만큼 복잡하지 않습니다. 적어도 그 스스로의 상상과 감정보다는 훨씬 간단합니다. 
    test 벽돌은, 반복적으로 무엇인가 채워가는 행위입니다. 
    무엇이 채워질까요? 코드의 자아가 채워질 수도 있고, 각 객체의 자아가 채워질 수도 있고, 개발자의 자아가 채워질 수도...
    아냐, 개발자의 자아는 박살날 거 같아. 질그릇처럼.`

  };  