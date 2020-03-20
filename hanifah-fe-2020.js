( function() {
    var getData = function() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve({
             list: [
               {
                 name: 'extra',
                 bandwidth: 'unlimited',
                 space: '750 MB',
                 website: 'up to 5',
                 email: 'unlimited',
                 image: './img/price-1.png',
                 domain: '',
                 ssh: ''
               },
               {
                 name: 'super',
                 bandwidth: 'unlimited',
                 website: 'unlimited',
                 email: 'unlimited',
                 space: '2 GB',
                 image: './img/price-2.png',
                 domain: 'free domain',
                 ssh: 'SSH Access'
               },
               {
                 name: 'monster',
                 bandwidth: 'unlimited',
                 website: 'unlimited',
                 email: 'unlimited',
                 space: '5 GB',
                 image: './img/price-3.png',
                 domain: 'free domain',
                 ssh: 'SSH Access'
               },
             ]
           })
        }, 2000)
      })
    }
    var createItemElement = function(item, index) {
      var template = 

          `
          <div class="card shadow thiscard mx-5 my-3">
          <div class="card-body">
          <h5 class="card-title item-${index}">${item.name}</h5>
          <img class="item-${index} img-price img-fluid" src="${item.image}" alt="price">
          <p class="data item-${index}">${item.bandwidth} bandwidth</p> 
          <p class="data item-${index}">${item.space} space</p>
          <p class="data item-${index}">${item.website} website</p> 
          <p class="data item-${index}">${item.email} email</p>
          <p class="data item-${index}">${item.domain}</p> 
          <p class="data item-${index}">${item.ssh}</p>
          <a href="#" class="btn btn-package">GET STARTED</a>

          </div>
          </div>`
      
      return template;
    }
    
    var initData = function() {
      var wrapper = document.getElementById('wrapper');
      wrapper.innerHTML = ''
      var listHTML = '';
      getData().then(response => {
        var list = response.list
        list.forEach((item, index) => {
          listHTML += createItemElement(item, index)
        })
        wrapper.innerHTML = listHTML;
      })
    }

    initData();

}) ();

          