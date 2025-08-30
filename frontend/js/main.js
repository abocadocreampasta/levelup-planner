// HTML에서 필요한 요소들을 이름표(id)로 찾아와 변수에 담습니다.
const questInput = document.getElementById('quest-input');
const addQuestButton = document.getElementById('add-quest-button');
const questList = document.getElementById('quest-list');

// '퀘스트 추가' 버튼에 이벤트 리스너를 추가합니다.
// MINE-RPG의 EventListener와 똑같습니다! "클릭" 이벤트가 발생하면, 안의 코드를 실행하라는 뜻이죠.
addQuestButton.addEventListener('click', function() {
    // 입력창에 적힌 텍스트를 가져옵니다. (공백은 제거)
    const newQuestText = questInput.value.trim();

    // 입력창이 비어있지 않다면, 퀘스트를 추가합니다.
    if (newQuestText !== '') {
        // 새로운 <li> 요소를 만듭니다. (새로운 퀘스트 항목)
        const newQuestItem = document.createElement('li');
        
        // 새로 만든 <li> 요소에 입력받은 텍스트를 넣습니다.
        newQuestItem.textContent = newQuestText;
        
        // 완성된 퀘스트 항목을 퀘스트 목록(<ul>)에 자식으로 추가합니다.
        questList.appendChild(newQuestItem);
        
        // 입력창을 깨끗하게 비워 다음 퀘스트를 받을 준비를 합니다.
        questInput.value = '';
    }
});