fetch('http://test.api.weniv.co.kr/mall')
    .then(productData=>productData.json())
    // .then(productData=>console.log(productData)) //console.log로 하면 리턴값이 없어지기 때문에 다음 then으로 넘겨줄 값을 리턴해주어야 한다.
    .then(productData=>productData)

// 1. 추가 then을 사용하여 7개의 항목 productName만 출력해보세요.(console.log)
    .then(productData => {
        console.log(productData.map(item => item.productName));
        return productData;
    })
// 2. 추가 then을 사용하여 7개의 항목 중 price가 10000원 이상되는 product를 출력하는 코드를 작성해주세요.(console.log)
    .then(productData => {
        console.log(productData.map(item => item.price)
                            .filter(item => item >= 10000));
        return productData;
    })

// 3. 추가 then을 사용하여 7개의 항목의 productName과 price를 각각 h2와 p태그로 생성하여(DOM) 화면에 출력해주세요.

    .then(productData => {
        const main = document.createElement("main");
        productData.forEach(item => {
            const ProductCard = document.createElement("article");
            const productName = document.createElement("h2");
            const productPrice = document.createElement("p");

            productName.textContent = `상품명 : ${item.productName}`;
            productPrice.textContent = `가격 : ${item.price}`;

            ProductCard.appendChild(productName);
            ProductCard.appendChild(productPrice);

            main.appendChild(ProductCard);
        })
        document.body.appendChild(main);
    })
// 4. error 처리를 해주세요.

    .catch(error => {
        alert('에러!')
        // error page로 리다이렉트
        console.log(error);
    })

// *** 최종코드 ***

fetch('http://test.api.weniv.co.kr/mall')
    .then(productData=>productData.json())
    .then(productData=>productData)
    .then(productData => {
        console.log(productData.map(item => item.productName));
        return productData;
    })
    .then(productData => {
        console.log(
                productData
                    .map(item => item.price)
                    .filter(item => item >= 10000)
            )
        return productData;
    })
    .then(productData => {
        const main = document.createElement("main");
        productData.forEach(item => {
            const ProductCard = document.createElement("article");
            const productName = document.createElement("h2");
            const productPrice = document.createElement("p");

            productName.textContent = `상품명 : ${item.productName}`;
            productPrice.textContent = `가격 : ${item.price}`;

            ProductCard.appendChild(productName);
            ProductCard.appendChild(productPrice);

            main.appendChild(ProductCard);
        })
        document.body.appendChild(main);
    })
    .catch(error => {
        alert('에러!')
        // error page로 리다이렉트
        console.log(error);
    })

// 5. 혹시 시간이 남으신 분들은 해당 코드를 뒤에서 배울 async, await으로 고쳐보세요! (async, await은 최신문법이면서 함수형 코드이다)
async function getData(){
    const response = await fetch(`http://test.api.weniv.co.kr/mall`);
    const productData = await(response.json());
    console.log(productData);
    console.log(productData.map((item) => item.productName));
    console.log(productData.map((item) => item.price).filter((item) => item > 10000));

    const main = document.createElement("main");
    productData.forEach(item => {
        const ProductCard = document.createElement("article");
        const productName = document.createElement("h2");
        const productPrice = document.createElement("p");

        productName.textContent = `상품명 : ${item.productName}`;
        productPrice.textContent = `가격 : ${item.price}`;

        ProductCard.appendChild(productName);
        ProductCard.appendChild(productPrice);

        main.appendChild(ProductCard);
    })
    document.body.appendChild(main);
}

getData();