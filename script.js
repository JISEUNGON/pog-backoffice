function submitForm() {
  // 폼 데이터 저장
  const cafeName = document.getElementById("cafeName").value;
  const drinkName = document.getElementById("drinkName").value;
  const temperature = document.querySelector('input[name="temperature"]:checked').value === "true";
  const toppings = document.getElementById("toppings").value.split(',').map(topping => ({ name: topping.trim() }));
  const kcal = parseInt(document.getElementById("kcal").value);
  const sugar = parseInt(document.getElementById("sugar").value);
  const size = document.getElementById("size").value;
  const manager = document.getElementById("manager").value;

  // 데이터 형식 변환
  const postData = {
    cafeName: cafeName,
    drinkName: drinkName,
    temperature: temperature,
    toppings: toppings,
    kcal: kcal,
    sugar: sugar,
    size: size,
    manager: manager
  };
  //확인 용도
  alert(JSON.stringify(postData));
  
   // POST 요청
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
  };

  const backendUrl = '';

  // POST 요청 보내기
  fetch(backendUrl, requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error('응답 오류');
      }
      return response.json();
    })
    .then(data => {
      console.log('데이터 전송 성공:', data);
      alert('데이터가 성공적으로 전송되었습니다.');
    })
    .catch(error => {
      console.error('데이터 전송 실패:', error);
      alert('데이터 전송에 실패하였습니다.');
    });
}
