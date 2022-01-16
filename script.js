const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
  const btns = question.querySelectorAll('button');
  // console.log(btns);
  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      // console.log('click');
      const current = question.children[1];
      questions.forEach(item => {
        if (item.children[1] !== current) {
          item.children[1].classList.remove('show');
          item.children[0].style.fontWeight = 'normal';
          item.children[0].style.color = '#787887';
          item.children[0].children[1].classList.remove('rotate');
        }
      })
      current.classList.toggle('show');
      
      if (current.classList.contains('show')) {
        question.children[0].style.fontWeight = 'bold';
        question.children[0].style.color = '#1d1e35';
        btn.classList.add('rotate');
      } else {
        btn.classList.remove('rotate');
        question.children[0].style.fontWeight = 'normal';
        question.children[0].style.color = '#787887';
      }
    })
  })
})
