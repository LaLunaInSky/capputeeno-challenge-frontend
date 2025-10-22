(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,13528,t=>{"use strict";t.s(["formatPrice",0,t=>{let e=(t/100).toLocaleString("pt-BR",{minimumFractionDigits:2});return`R$ ${e}`}])},64545,t=>{t.v({className:"saira_d42c9e17-module__PPfZPq__className"})},24972,t=>{"use strict";var e=t.i(63634),i=t.i(45552);function n(){return(0,e.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,e.jsx)("path",{d:"M18.3639 5.63604C21.8787 9.15076 21.8787 14.8492 18.3639 18.3639C14.8492 21.8787 9.15074 21.8787 5.63604 18.3639C2.12132 14.8492 2.12132 9.15074 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.3639 5.63604",stroke:"#617480",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,e.jsx)("path",{d:"M10 13L7.5 10.5L10 8",stroke:"#617480",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,e.jsx)("path",{d:"M11.5 16H12.75C14.269 16 15.5 14.769 15.5 13.25V13.25C15.5 11.731 14.269 10.5 12.75 10.5H11.5H7.5",stroke:"#617480",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}var a=t.i(64545);let r={className:a.default.className,style:{fontFamily:"'Saira', 'Saira Fallback'",fontWeight:500,fontStyle:"normal"}};null!=a.default.variable&&(r.variable=a.default.variable);var o=t.i(85440);let d=i.default.button.withConfig({displayName:"back-input__ContainerBackButton",componentId:"sc-ffa4aa8a-0"})`
    width: 72px;
    height: 24px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    cursor: pointer;

    border: none;
    background-color: transparent;

    p {
        font-family: inherit;
        font-weight: 500;
        font-size: 14px;
        line-height: 150%;
        letter-spacing: 0%;
        vertical-align: middle;

        color: var(--text-secondary);
    }
`;function s(){let t=(0,o.useRouter)();return(0,e.jsxs)(d,{className:r.className,onClick:()=>{t.push("/")},children:[(0,e.jsx)(n,{}),(0,e.jsx)("p",{children:"Voltar"})]})}t.s(["BackInput",()=>s],24972)},33823,t=>{"use strict";var e=t.i(63634),i=t.i(45552),n=t.i(24972);let a=i.default.p.withConfig({displayName:"not-found-page__TagNotFoundPage",componentId:"sc-28d500d1-0"})`
    font-family: inherit;
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;
    text-align: center;
    text-transform: uppercase;

    margin-top: 50px;

    color: var(--text-dark);
`;function r(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.BackInput,{}),(0,e.jsx)(a,{children:"página não encontrada"})]})}t.s(["NotFoundPage",()=>r])},68807,t=>{"use strict";var e=t.i(63634),i=t.i(33823),n=t.i(45552),a=t.i(24972),r=t.i(55735),o=t.i(10421),d=t.i(13528);function s(){return(0,e.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,e.jsx)("path",{d:"M4 7V5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V7",stroke:"#F5F5FA",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,e.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 7H4C3.44772 7 3 7.44772 3 8V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V8C21 7.44772 20.5523 7 20 7Z",stroke:"#F5F5FA",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,e.jsx)("path",{d:"M16 11C16 13.2091 14.2091 15 12 15C9.79086 15 8 13.2091 8 11",stroke:"#F5F5FA",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}var c=t.i(55698),l=t.i(85440);let p=n.default.button.withConfig({displayName:"add-to-cart-input__AddToCartInput",componentId:"sc-c812edb0-0"})`
    width: 100%;
    height: 44px;

    padding: 12px 0px;

    cursor: pointer;

    border: none;
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 12px;

    font-family: inherit;

    background-color: var(--blue-brand);

    &:hover {
        background-color: var(--orange-brand);
    }
`,h=n.default.p.withConfig({displayName:"add-to-cart-input__TagInfoInput",componentId:"sc-c812edb0-1"})`
    height: 24px;

    font-family: inherit;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: center;
    vertical-align: middle;
    text-transform: uppercase;

    color: var(--shapes-light-background);

`;function u(t){let i=(0,l.useRouter)(),{addItemToLocalStorage:n}=(0,c.useLocalStorage)();return(0,e.jsxs)(p,{onClick:()=>{n({id:t?.id,name:t?.product?.name,image_url:t?.product?.image_url,description:t?.product?.description,price_in_cents:t?.product?.price_in_cents}),i.refresh()},children:[(0,e.jsx)(s,{}),(0,e.jsx)(h,{children:"adicionar ao carrinho"})]})}let g=n.default.div.withConfig({displayName:"product-page__TagProductPage",componentId:"sc-74312cb-0"})`
    width: 100%;

    display: flex;
    flex-direction: column;
`,m=n.default.div.withConfig({displayName:"product-page__ContainerProductInfos",componentId:"sc-74312cb-1"})`
    width: 100%;
    height: 580px;

    margin-top: 22px;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 32px;

    @media (max-width: 770px) {
        flex-direction: column;
        
        height: auto;

        margin-bottom: 50px;
    }
`,f=n.default.img.withConfig({displayName:"product-page__ImageProduct",componentId:"sc-74312cb-2"})`
    width: 640px;
    height: 580px;

    border-radius: 4px;

    background-color: var(--orange-brand);

    @media (max-width: 1154px) {
        width: 50%;
        height: 90%;
    }

    @media (max-width: 820px) {
        height: 80%;
    }

    @media (max-width: 770px) {
        width: 70%;
        height: 40%;
    }

    @media (max-width: 540px) {
        width: 80%;
    }
`,x=n.default.div.withConfig({displayName:"product-page__TagProductInfos",componentId:"sc-74312cb-3"})`
    width: 448px;
    height: 580px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;

    @media (max-width: 1154px) {
        width: 40%;
        height: 90%;
    }
    
    @media (max-width: 820px) {
        height: 80%;
    }

    @media (max-width: 770px) {
        width: 80%;
        height: 450px;
    }
`,w=n.default.div.withConfig({displayName:"product-page__ContainerDivProductInfos",componentId:"sc-74312cb-4"})`
    width: 100%;
    height: 536px;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;

    gap: 12px;
`,y=n.default.p.withConfig({displayName:"product-page__TagCategory",componentId:"sc-74312cb-5"})`
    width: 100%;
    height: 24px;

    font-family: inherit;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;

    color: var(--inputs-and-icons);
`,_=n.default.h1.withConfig({displayName:"product-page__TagName",componentId:"sc-74312cb-6"})`
    width: 100%;
    height: 48px;

    font-family: inherit;
    font-weight: 300;
    font-size: 32px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;

    color: var(--inputs-and-icons);
    
    @media (max-width: 1154px) {
        height: auto;
    }
`,v=n.default.h2.withConfig({displayName:"product-page__TagPrice",componentId:"sc-74312cb-7"})`
    width: 150px;
    height: 30px;

    margin-top: -8px;

    font-family: inherit;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;

    color: var(--shapes-dark);
`,j=n.default.p.withConfig({displayName:"product-page__TagShippingInformation",componentId:"sc-74312cb-8"})`
    width: 100%;
    height: 18px;

    margin-top: 12px;

    font-family: inherit;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;

    color: var(--inputs-and-icons);

    @media (max-width: 770px) {
        height: auto;
    }
`,C=n.default.div.withConfig({displayName:"product-page__ContainerDescription",componentId:"sc-74312cb-9"})`
    width: 100%;
    height: 88px;

    margin-top: 46px;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;

    gap: 8px;

    font-family: inherit;

    h2 {
        font-family: inherit;
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0%;
        vertical-align: middle;
        text-transform: uppercase;
        text-align: start;

        color: var(--text-dark);
    }

    p {
        font-family: inherit;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        letter-spacing: 0%;
        vertical-align: middle;

        color: var(--text-dark);
    }
`;function k(t){let i=t?.idProduct,{data:n}=(0,r.useQuery)({queryFn:()=>{let t;return(0,o.GET_FETCHER_PRODUCTS)((t=i??"",`
    query {
        allProducts(
            filter: {
                id: "${t}"
            }
        ) {
            name
            image_url
            price_in_cents
            category
            description
        }
    }
`))},queryKey:["products",i]}),s=n?.data?.data?.allProducts[0]??{name:"",image_url:"",category:"mugs",price_in_cents:1e3,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae accusamus vero est eum temporibus provident nulla quidem deserunt facilis cumque beatae non incidunt dicta culpa doloribus neque nihil, optio nemo."};return(0,e.jsxs)(g,{children:[(0,e.jsx)(a.BackInput,{}),(0,e.jsxs)(m,{children:[(0,e.jsx)(f,{src:s.image_url}),(0,e.jsxs)(x,{children:[(0,e.jsxs)(w,{children:[(0,e.jsx)(y,{children:"t-shirts"===s.category?"Camiseta":"Caneca"}),(0,e.jsx)(_,{children:s.name}),(0,e.jsx)(v,{children:(0,d.formatPrice)(s.price_in_cents)}),(0,e.jsx)(j,{children:"*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00."}),(0,e.jsxs)(C,{children:[(0,e.jsx)("h2",{children:"descrição"}),(0,e.jsx)("p",{children:s.description})]})]}),(0,e.jsx)(u,{product:s,id:i})]})]})]})}function b(){let t=(0,l.useSearchParams)().get("id"),{data:n}=(0,r.useQuery)({queryFn:()=>{let e;return(0,o.GET_FETCHER_PRODUCTS)((e=t??"",`
    query {
        allProducts(
            filter: {
                id: "${e}"
            }
        ) {
            id
        }
    }
`))},queryKey:["products",t]}),a=n?.data?.data?.allProducts??[];return null===t||a?.length<1?(0,e.jsx)(i.NotFoundPage,{}):(0,e.jsx)(k,{idProduct:t})}t.s(["default",()=>b],68807)}]);