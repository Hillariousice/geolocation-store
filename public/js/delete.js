let storeId = document.querySelector('#store-id')


async function deleteStore(e) {
    e.preventDefault();
  
    if (storeId.value === '' ) {
      alert('Please fill in fields');
    }
  
    const sendBody = {
      storeId: document.body.removeChild(storeId)
      
    };
  
    try {
      const res = await fetch('/api/v1/stores/:_id', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendBody)
      });
  
      // if (res.status === 200) {
      //   throw Error('Store updated');
      // }
  
      alert('Store deleted!');
      window.location.href = '/index.html';
    } catch (err) {
      alert(err);
      return;
    }
  }
  
  storeForm.addEventListener('submit', deleteStore);