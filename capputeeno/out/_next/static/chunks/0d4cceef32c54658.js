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
`;function s(){let t=(0,o.useRouter)();return(0,e.jsxs)(d,{className:r.className,onClick:()=>{t.push("/")},children:[(0,e.jsx)(n,{}),(0,e.jsx)("p",{children:"Voltar"})]})}t.s(["BackInput",()=>s],24972)},55473,t=>{"use strict";var e=t.i(63634),i=t.i(45552),n=t.i(24972),a=t.i(13528),r=t.i(55698);function o(){return(0,e.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,e.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.1378 21H7.85782C6.81082 21 5.94082 20.192 5.86282 19.147L4.96582 7H18.9998L18.1328 19.142C18.0578 20.189 17.1868 21 16.1378 21V21Z",stroke:"#DE3838",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,e.jsx)("path",{d:"M12 11V17",stroke:"#DE3838",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,e.jsx)("path",{d:"M4 7H20",stroke:"#DE3838",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,e.jsx)("path",{d:"M17 7L15.987 4.298C15.694 3.517 14.948 3 14.114 3H9.886C9.052 3 8.306 3.517 8.013 4.298L7 7",stroke:"#DE3838",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,e.jsx)("path",{d:"M15.4298 11L14.9998 17",stroke:"#DE3838",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,e.jsx)("path",{d:"M8.57016 11L9.00016 17",stroke:"#DE3838",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}var d=t.i(85440),s=t.i(63410);let l=i.default.select.withConfig({displayName:"quantity-product-input__TagQuantityProductInput",componentId:"sc-7b70756b-0"})`
    width: 65px;
    height: 40px;

    border: 1px solid var(--border-text-dark);
    border-radius: 8px;

    background-color: var(--bg-second);

    padding: 1px;

    font-family: inherit;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: center;
    vertical-align: middle;
    text-transform: uppercase;

    color: var(--text-dark);
`;function c(t){let i=(0,d.useRouter)(),{updateTheQuantity:n}=(0,r.useLocalStorage)(),a=[];for(let t=1;t<=10;t++)a.push(t);let[o,c]=(0,s.useState)(t?.quantity);return(0,e.jsx)(l,{name:"quantity",id:"quantity",value:o,children:a.map(a=>(0,e.jsx)("option",{value:`${a}`,onClick:()=>{c(a),n(a,t?.id),i.refresh()},children:a},`option-${a}`))})}let p=i.default.div.withConfig({displayName:"cart-product__TagCartProduct",componentId:"sc-afbdbf27-0"})`
    width: 100%;
    height: 211px;

    display: flex;
    justify-content: start;
    align-items: center;

    background-color: white;

    border-radius: 8px;

    overflow: hidden;

    @media (max-width: 530px) {
        width: 80%;
        height: auto;

        flex-direction: column;
    }
`,h=i.default.img.withConfig({displayName:"cart-product__ImageProduct",componentId:"sc-afbdbf27-1"})`
    width: 35%;
    height: 211px;

    background-color: var(--orange-brand);

    @media (max-width: 530px) {
        width: 211px;

        border-radius: 0px 0px 4px 4px;
    }
`,u=i.default.div.withConfig({displayName:"cart-product__ContainerProdctInfos",componentId:"sc-afbdbf27-2"})`
    width: 65%;
    height: 100%;

    padding: 16px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 530px) {
        width: 100%;
    }
`,f=i.default.div.withConfig({displayName:"cart-product__ContainerNameAndTrashIcon",componentId:"sc-afbdbf27-3"})`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-family: inherit;

    h1 {
        font-family: inherit;
        font-weight: 300;
        font-size: 20px;
        line-height: 150%;
        letter-spacing: 0%;
        vertical-align: middle;

        color: var(--inputs-and-icons);
    }
`,x=i.default.div.withConfig({displayName:"cart-product__ContainerQuantityProductInputAndPrice",componentId:"sc-afbdbf27-4"})`
    width: 100%;
    height: 40px;

    display: flex;
    justify-content: space-between;

    font-family: inherit;

    margin-top: 25px;

    h2 {
        height: 24px;

        font-family: inherit;
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0%;
        text-align: right;
        vertical-align: middle;

        color: var(--shapes-dark);
    }
`,m=i.default.p.withConfig({displayName:"cart-product__TagDescription",componentId:"sc-afbdbf27-5"})`
    width: 98%;
    height: 64px;

    font-family: inherit;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;

    margin-top: 12px;

    color: var(--inputs-and-icons);

    @media (max-width: 530px) {
        height: auto;
    }
`,g=i.default.button.withConfig({displayName:"cart-product__DeleteInput",componentId:"sc-afbdbf27-6"})`
    width: 24px;
    height: 24px;

    cursor: pointer;

    border: none;
    background-color: transparent;

    display: flex;
    justify-content: center;
    align-items: center;
`;function w(t){let i=(0,d.useRouter)(),{deleteItem:n}=(0,r.useLocalStorage)();return(0,e.jsxs)(p,{children:[(0,e.jsx)(h,{src:t?.product?.image_url}),(0,e.jsxs)(u,{children:[(0,e.jsxs)(f,{children:[(0,e.jsx)("h1",{children:t?.product?.name}),(0,e.jsx)(g,{onClick:()=>{n(t?.product?.id),i.refresh()},children:(0,e.jsx)(o,{})})]}),(0,e.jsx)(m,{children:t?.product?.description}),(0,e.jsxs)(x,{children:[(0,e.jsx)(c,{quantity:t?.product?.quantity,id:t?.product?.id}),(0,e.jsx)("h2",{children:(0,a.formatPrice)(t?.product?.total_price)})]})]})]})}let y=i.default.p.withConfig({displayName:"cart-products__TagNotFoundProducts",componentId:"sc-4f126aa6-0"})`
    margin-top: 15px;

    font-weight: 600;
    text-transform: uppercase;

    color: var(--orange-brand);
`,j=i.default.div.withConfig({displayName:"cart-products__ContainerCartProducts",componentId:"sc-4f126aa6-1"})`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    gap: 16px;
`;function v(){let{getCountItems:t,getItems:i}=(0,r.useLocalStorage)();if(0===t())return(0,e.jsx)(y,{children:"nenhum produto no carrinho"});{let t=i().reverse();return(0,e.jsx)(j,{children:t.map(t=>(0,e.jsx)(w,{product:t},t.id))})}}let b=i.default.p.withConfig({displayName:"link-input__TagLinkInput",componentId:"sc-e2d30ded-0"})`
    height: 21px;

    font-family: inherit;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;
    text-transform: uppercase;
    text-decoration: underline;
    text-decoration-style: solid;
    text-decoration-thickness: 0%;

    cursor: pointer;

    color: var(--text-dark);
`;function k(t){return(0,e.jsx)(b,{children:t.text})}let C=i.default.div.withConfig({displayName:"links-inputs__ContainerLinksInputs",componentId:"sc-9e7a010c-0"})`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;

    margin-bottom: 12px;

    gap: 12px;

    @media (max-width: 1145px) {
        align-items: end;
    }

    @media (max-width: 575px) {
        align-items: start;
    }
`;function _(){return(0,e.jsxs)(C,{children:[(0,e.jsx)(k,{text:"ajuda"}),(0,e.jsx)(k,{text:"reembolsos"}),(0,e.jsx)(k,{text:"entregas e frete"}),(0,e.jsx)(k,{text:"trocas e devoluções"})]})}let I=i.default.button.withConfig({displayName:"complete-the-purchase-input__ButtonCompleteThePurchase",componentId:"sc-63528af-0"})`
    width: 100%;
    height: 44px;

    border: none;
    border-radius: 4px;

    font-family: inherit;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: center;
    vertical-align: middle;
    text-transform: uppercase;

    cursor: pointer;

    color: var(--shapes-light-background);

    background-color: var(--other-green);
`;function L(){let t=(0,d.useRouter)(),{completeThePurchase:i}=(0,r.useLocalStorage)();return(0,e.jsx)(I,{onClick:()=>{i(),t.replace("/")},children:"finalizar a compra"})}let N=i.default.div.withConfig({displayName:"subtotal-and-delivery-info__ContainerSubtotalAndDeliveryInfo",componentId:"sc-d856a598-0"})`
    width: 100%;

    margin-top: 29px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 12px;
`,P=i.default.div.withConfig({displayName:"subtotal-and-delivery-info__TagItem",componentId:"sc-d856a598-1"})`
    width: 100%;
    height: 24px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h2, p {
        font-family: inherit;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0%;
        vertical-align: middle;

        color: var(--inputs-and-icons);
    }
`;function T(){let{getTotalPrice:t}=(0,r.useLocalStorage)(),i=t();return(0,e.jsxs)(N,{children:[(0,e.jsxs)(P,{children:[(0,e.jsx)("h2",{children:"Subtotal de produtos"}),(0,e.jsx)("p",{children:(0,a.formatPrice)(i)})]}),(0,e.jsxs)(P,{children:[(0,e.jsx)("h2",{children:"Entrega"}),(0,e.jsx)("p",{children:(0,a.formatPrice)(4e3)})]})]})}let S=i.default.div.withConfig({displayName:"order-total__ContainerOrderTotal",componentId:"sc-be0b05d9-0"})`
    width: 100%;
    height: 24px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h2, p {
        font-family: inherit;
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0%;
        vertical-align: middle;

        color: var(--inputs-and-icons);
    }
`;function z(){let{getTotalPrice:t}=(0,r.useLocalStorage)(),i=t();return(0,e.jsxs)(S,{children:[(0,e.jsx)("h2",{children:"Total"}),(0,e.jsx)("p",{children:(0,a.formatPrice)(i+4e3)})]})}let B=i.default.div.withConfig({displayName:"order-summary__ContainerOrderSummary",componentId:"sc-c5274af0-0"})`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
`,D=i.default.h1.withConfig({displayName:"order-summary__TagOrderSummary",componentId:"sc-c5274af0-1"})`
    height: 30px;

    font-family: inherit;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;
    text-transform: uppercase;

    color: var(--inputs-and-icons);
`,R=i.default.hr.withConfig({displayName:"order-summary__SeparatorInfos",componentId:"sc-c5274af0-2"})`
    width: 100%;
    height: 1px;

    background-color: var(--shapes-02);
    
    border: none;

    margin-top: 24px;
    margin-bottom: 8px;
`;function W(){return(0,e.jsxs)(B,{children:[(0,e.jsx)(D,{children:"resumo do pedido"}),(0,e.jsx)(T,{}),(0,e.jsx)(R,{}),(0,e.jsx)(z,{})]})}let M=i.default.div.withConfig({displayName:"cart-infos__ContainerCartInfos",componentId:"sc-89cb9f09-0"})`
    width: 304px;
    height: 259px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;function q(){return(0,e.jsxs)(M,{children:[(0,e.jsx)(W,{}),(0,e.jsx)(L,{})]})}let A=i.default.div.withConfig({displayName:"cart-order__TagCartOrder",componentId:"sc-ecf89f0e-0"})`
    width: 352px;
    height: 700px;

    padding: 16px 24px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;

    background-color: white;

    @media (max-width: 1145px) {
        width: 736px;
        height: auto;

        margin-bottom: 22px;

        flex-direction: row;
        align-items: end;
    }

    @media (max-width: 779px) {
        width: 100%;
    }

    @media (max-width: 575px) {
        width: auto;

        flex-direction: column;

        gap: 50px;

        align-items: start;
    }
`;function E(){return(0,e.jsxs)(A,{children:[(0,e.jsx)(q,{}),(0,e.jsx)(_,{})]})}let H=i.default.div.withConfig({displayName:"cart-page__TagCartPage",componentId:"sc-ca795c8e-0"})`
    width: 100%;
    
    display: flex;
    
    gap: 22px;

    @media (max-width: 1145px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`,O=i.default.div.withConfig({displayName:"cart-page__ContainerProductsAndBackInput",componentId:"sc-ca795c8e-1"})`
    width: 736px;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;

    @media (max-width: 779px) {
        width: 100%;
    }
`,$=i.default.h1.withConfig({displayName:"cart-page__TagYourCart",componentId:"sc-ca795c8e-2"})`
    height: 36px;

    margin-top: 22px;

    font-family: inherit;
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;
    text-transform: uppercase;

    color: var(--inputs-and-icons);
    
    margin-bottom: 6px;
`,F=i.default.p.withConfig({displayName:"cart-page__TagTotalProductsAndPrice",componentId:"sc-ca795c8e-3"})`
    height: 24px;

    font-family: inherit;
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;

    color: var(--inputs-and-icons);

    margin-bottom: 23px;

    span {
        font-family: inherit;
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0%;
        vertical-align: middle;

        margin-left: 4px;
    }
`;function V(){let{getCountItems:t,getTotalPrice:i}=(0,r.useLocalStorage)(),o=i(),d=t();return(0,e.jsxs)(H,{children:[(0,e.jsxs)(O,{children:[(0,e.jsx)(n.BackInput,{}),(0,e.jsx)($,{children:"seu carrinho"}),(0,e.jsxs)(F,{children:["Total (",`${d} produto${1!=d?"s":""}`,")",(0,e.jsx)("span",{children:(0,a.formatPrice)(o)})]}),(0,e.jsx)(v,{})]}),d>0&&(0,e.jsx)(E,{})]})}let K=i.default.div.withConfig({displayName:"page__TagCartPage",componentId:"sc-52017757-0"})`
    font-family: inherit;
`;function Q(){return(0,e.jsx)(K,{children:(0,e.jsx)(V,{})})}t.s(["default",()=>Q],55473)}]);