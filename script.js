const shareBtn = document.querySelector('.share-btn');

shareBtn.addEventListener('click', () => {
      shareBtn.classList.toggle('active');

      if (shareBtn.classList.contains('active')) {
            // document.querySelector('.share-via').style.opacity = 1;
            // document.querySelector('.share-via').style.bottom = 0;
            // document.querySelector('.share-via').style.visibility = 'visible';
            document.querySelector('.share-via').classList.add('styled-tooltip')
      } else {
            document.querySelector('.share-via').classList.remove('styled-tooltip');
      }
})