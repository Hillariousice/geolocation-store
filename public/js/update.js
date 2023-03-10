const storeForm = document.getElementById('store-form');
const storeId = document.getElementById('store-id');
const storeAddress = document.getElementById('store-address');

// Send POST to API to add store
async function updateStore(e) {
  e.preventDefault();

  if (storeId.value === '' || storeAddress.value === '') {
    alert('Please fill in fields');
  }

  const sendBody = {
    storeId: storeId.value,
    address: storeAddress.value
  };

  try {
    const res = await fetch('/api/v1/stores/:_id', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sendBody)
    });

    // if (res.status === 200) {
    //   throw Error('Store updated');
    // }

    alert('Store updated!');
    window.location.href = '/index.html';
  } catch (err) {
    alert(err);
    return;
  }
}

storeForm.addEventListener('submit', updateStore);