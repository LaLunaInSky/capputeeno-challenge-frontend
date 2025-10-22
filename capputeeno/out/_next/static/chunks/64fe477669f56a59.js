(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,13528,e=>{"use strict";e.s(["formatPrice",0,e=>{let t=(e/100).toLocaleString("pt-BR",{minimumFractionDigits:2});return`R$ ${t}`}])},80555,e=>{e.v({className:"saira_c58b331e-module__BykuAW__className"})},52683,e=>{"use strict";var t=e.i(63634),i=e.i(45552),r=e.i(80441),n=e.i(3345);let a=i.default.ul.withConfig({displayName:"filter-by-type__FilterList",componentId:"sc-b11b14be-0"})`
    display: flex;
    align-items: center;
    justify-content: left;    
    gap: 39px;

    list-style-type: none;

    @media (max-width: 500px) {
        gap: 24px;
    }

    @media (max-width: 645px) {
        gap: 28px;
        margin-bottom: 15px;
    }
`,o=i.default.li.withConfig({displayName:"filter-by-type__FilterItem",componentId:"sc-b11b14be-1"})`
    padding: 2px;    
    cursor: pointer;
    
    font-family: inherit;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0%;
    text-align: center;
    vertical-align: middle;
    text-transform: uppercase;
    
    height: ${e=>e.selected?"28px":"26px"};
    color: ${e=>e.selected?"var(--inputs-and-icons)":"var(--text-dark)"};
    border-bottom: ${e=>e.selected?"3px solid var(--orange-low)":""};
    font-weight: ${e=>e.selected?"600":"400"};

    &:hover {
        color: ${e=>e.selected?"":"var(--orange-low)"};
        border-bottom: ${e=>e.selected?"":"1px solid var(--orange-low)"};
    }

    @media (max-width: 500px) {
        font-size: 14px;
    }
`;function s(){let{type:e,setType:i}=(0,r.useFilter)(),s=e=>{i(e)};return(0,t.jsxs)(a,{children:[(0,t.jsx)(o,{selected:e===n.FilterTypes.ALL,onClick:()=>{s(n.FilterTypes.ALL)},children:"todos os produtos"}),(0,t.jsx)(o,{selected:e===n.FilterTypes.TSHIRTS,onClick:()=>{s(n.FilterTypes.TSHIRTS)},children:"camisetas"}),(0,t.jsx)(o,{selected:e===n.FilterTypes.MUGS,onClick:()=>{s(n.FilterTypes.MUGS)},children:"canecas"})]})}function l(){return(0,t.jsx)("svg",{width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M1 1L5 5L9 1",stroke:"#737380",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}var d=e.i(63410),c=e.i(17099);let p=i.default.div.withConfig({displayName:"filter-by-organize__TagFilter",componentId:"sc-4e53aa1c-0"})`
    position: relative;

    @media (max-width: 500px) {
        position: absolute;

        top: 105px;
        right: 17px;
    }

    @media (max-width: 580px) and (min-width: 501px) {
        position: absolute;
        
        top: 130px;
        right: 17px;
    }
`,u=i.default.button.withConfig({displayName:"filter-by-organize__ContainerFilter",componentId:"sc-4e53aa1c-1"})`
    height: 24px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    
    border: none;
    background-color: transparent;

    color: var(--text-dark);

    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    vertical-align: middle;    

    cursor: pointer;

    &:hover {
        color: var(--orange-low);
    }

    &:hover > div {
        filter: invert(61%) sepia(75%) saturate(267%) hue-rotate(328deg) brightness(110%) contrast(101%);
    }
    
    div {
        width: 24px;
        height: 24px;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`,g=i.default.ul.withConfig({displayName:"filter-by-organize__ContainerOrganizesFilters",componentId:"sc-4e53aa1c-2"})`
    width: 176px;
    height: 132px;
    border-radius: 4px;
    background-color: white;
    padding: 12px 0px;

    box-shadow: 0px 4px 12px 0px #0000001A;

    right: 0px;

    position: absolute;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;

    z-index: 5;

    list-style: none;
`,h=i.default.li.withConfig({displayName:"filter-by-organize__OrganizeFilterItem",componentId:"sc-4e53aa1c-3"})`
    width: 144px;
    height: 24px;

    text-align: start;
    vertical-align: middle;

    color: var(--text-dark);
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;

    cursor: pointer;

    &:hover {
        color: var(--orange-low);
    }
`;function x(){let[e,i]=(0,d.useState)(!1),{organize:n,setOrganize:a}=(0,r.useFilter)(),o=e=>{a(e),s()},s=()=>{i(e=>!e)};return(0,t.jsxs)(p,{children:[(0,t.jsxs)(u,{onClick:s,children:[0===n?"Organizar por":1===n?"Novidades":2===n?"Preço: Maior - menor":3===n?"Preço: Menor - maior":4===n?"Mais vendidos":"",(0,t.jsx)("div",{children:(0,t.jsx)(l,{})})]}),e&&(0,t.jsxs)(g,{children:[(0,t.jsx)(h,{onClick:()=>{o(c.FilterOrganizes.NEWS)},children:"Novidades"}),(0,t.jsx)(h,{onClick:()=>{o(c.FilterOrganizes.HIGHEST_TO_LOWEST_PRICE)},children:"Preço: Maior - menor"}),(0,t.jsx)(h,{onClick:()=>{o(c.FilterOrganizes.LOWEST_TO_HIGHEST_PRICE)},children:"Preço: Menor - maior"}),(0,t.jsx)(h,{onClick:()=>{o(c.FilterOrganizes.BEST_SELLERS)},children:"Mais vendidos"})]})]})}let f=i.default.div.withConfig({displayName:"filter-bar__ContainerFilter",componentId:"sc-b7cdbabb-0"})`
    width: 100%;
    
    display: flex;
    justify-content: space-between;
    align-items: start;

    @media (max-width: 580px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        gap: 10px;

        margin-top: -10px;
    }
`;function m(){return(0,t.jsxs)(f,{children:[(0,t.jsx)(s,{}),(0,t.jsx)("div",{children:(0,t.jsx)(x,{})})]})}function y(){return(0,t.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M14 16L10 12L14 8",stroke:"#737380",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function w(){return(0,t.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M10 16L14 12L10 8",stroke:"#737380",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}let v=i.default.div.withConfig({displayName:"pages-arrows__ContainerPagesArrows",componentId:"sc-d16e5550-0"})`
    display: flex;
    gap: 4px;
`,b=i.default.button.withConfig({displayName:"pages-arrows__PageItem",componentId:"sc-d16e5550-1"})`
    width: 32px;
    height: 32px;

    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    border: none;
    border-radius: 8px;

    background-color: var(--shapes-light-gray);

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: ${e=>e.disabled?"":"var(--text-dark)"};

        color: var(--shapes-light-gray);

        svg {
            filter: ${e=>e.disabled?"":"brightness(0) saturate(100%) invert(94%) sepia(13%) saturate(75%) hue-rotate(202deg) brightness(100%) contrast(91%)"};
        }
    }
`;function _(){let{page:e,numberOfPages:i,setPage:n}=(0,r.useFilter)();return(0,t.jsxs)(v,{children:[(0,t.jsx)(b,{disabled:0===e,onClick:()=>{e>0&&n(e-1)},children:(0,t.jsx)(y,{})}),(0,t.jsx)(b,{disabled:e===i-1,onClick:()=>{e<i-1&&n(e+1)},children:(0,t.jsx)(w,{})})]})}let j=i.default.div.withConfig({displayName:"pages-numbers__ContainerPagesNumber",componentId:"sc-84356a27-0"})`
    height: 100%;

    display: flex;
    justify-content: start;
    align-items: center;

    gap: 1px;

    margin-right: 8px;
`,C=i.default.button.withConfig({displayName:"pages-numbers__PageItem",componentId:"sc-84356a27-1"})`
    width: 32px;
    height: 32px;

    cursor: ${e=>e.selected?"not-allowed":"pointer"};

    border: ${e=>e.selected?"1px solid var(--orange-low)":"none"};
    border-radius: 8px;

    background-color: ${e=>e.selected?"var(--shapes-light-background)":"var(--shapes-light-gray)"};

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: inherit;
    font-weight: ${e=>e.selected?"600":"400"};
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: center;
    vertical-align: middle;
    text-transform: uppercase;

    color: ${e=>e.selected?"var(--orange-low)":"var(--text-dark)"};
    
    &:hover {
        background-color: ${e=>e.selected?"var(--shapes-light-background)":"var(--text-dark)"};

        color: ${e=>e.selected?"var(--orange-low)":"var(--shapes-light-gray)"};
    }
`;function k(){let{page:e,numberOfPages:i,setPage:n}=(0,r.useFilter)(),a=[];for(let e=0;e<i;e++)a.push(e);return(0,t.jsx)(j,{children:a?.map(i=>(0,t.jsx)(C,{selected:e===i,onClick:()=>{n(i)},children:i+1},`button_page_${i}`))})}let F=i.default.div.withConfig({displayName:"page-container__TagPageBar",componentId:"sc-7afe2db9-0"})`
    width: 100%;
    height: 32px;

    margin-top: 14px;

    display: flex;
    justify-content: end;
`;function I(){return(0,t.jsxs)(F,{children:[(0,t.jsx)(k,{}),(0,t.jsx)(_,{})]})}let N=i.default.p.withConfig({displayName:"nothing-found__TagNothingFound",componentId:"sc-37005d15-0"})`
    width: 100%;
    height: 30vh;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: inherit;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;

    span {
        display: block;
        text-transform: none;
        color: var(--text-dark);
    }
`;function T(){return(0,t.jsx)(N,{children:(0,t.jsx)("span",{children:"Resultado não encontrado"})})}var P=e.i(55735),$=e.i(10421);let L=e=>"all"===e?"":`
filter: {
    category: "${e}"
}
`,S=e=>{switch(e){case 0:return`
sortField: "",
sortOrder: "",
`;case 1:return`
sortField: "created_at",
sortOrder: "DSC",
`;case 2:return`
sortField: "price_in_cents",
sortOrder: "DSC",
`;case 3:return`
sortField: "price_in_cents",
sortOrder: "ASC",
`;case 4:return`
sortField: "sales",
sortOrder: "DSC",
`}},O=i.default.div.withConfig({displayName:"page-bar__TagPageBar",componentId:"sc-17acf7f3-0"})`
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    align-items: center;
    justify-content: start;

    gap: 32px;

    font-family: inherit;

    margin-bottom: 32px;
`;function z({children:e}){let{type:i,organize:n,page:a,search:o,numberOfPages:s,setNumberOfPages:l,setPage:c}=(0,r.useFilter)(),p=(0,d.useDeferredValue)(o).toLowerCase(),{data:u}=(0,P.useQuery)({queryFn:()=>{let e,t;return(0,$.GET_FETCHER_PRODUCTS)((e=L(i),t=S(n),`
        query {
            allProducts${"all"!=i||n>0?"(":""}
                ${""!=e?`${e},`:""}
                ${n>0?t:""}
            ${"all"!=i||n>0?")":""} {
                id
                name
                image_url
                price_in_cents
            }
        }
    `))},queryKey:["products",i,n,p]}),g=u?.data?.data?.allProducts??[];g=g?.filter(e=>e.name.toLowerCase().includes(p));let h=g?.length;return(h<=0?l(1):(l(Math.ceil(h/12)),a>s&&c(s-1)),h<=0)?(0,t.jsx)(T,{}):(0,t.jsxs)(O,{children:[(0,t.jsx)(I,{}),e,(0,t.jsx)(I,{})]})}var E=e.i(80555);let R={className:E.default.className,style:{fontFamily:"'Saira', 'Saira Fallback'",fontStyle:"normal"}};null!=E.default.variable&&(R.variable=E.default.variable);var M=e.i(13528),B=e.i(85440);let D=i.default.button.withConfig({displayName:"product-card__TagProduct",componentId:"sc-2e625497-0"})`
    width: 256px;
    height: 378px;
    
    background-color: white;
    backdrop-filter: blur(20px);

    border-radius: 8px 8px 4px 4px;
    border: none;

    display: flex;
    flex-direction: column;

    cursor: pointer;

    &:hover {
        outline: var(--inputs-and-icons) 2px solid;
        outline-offset: 1px;
    }

    overflow: hidden;
`,A=i.default.img.withConfig({displayName:"product-card__ImageProduct",componentId:"sc-2e625497-1"})`
    width: 100%;
    height: 300px;

    background-color: var(--orange-brand);
`,H=i.default.div.withConfig({displayName:"product-card__InfoProduct",componentId:"sc-2e625497-2"})`
    width: 100%;
    height: 78px;

    padding: 8px 12px;

    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    gap: 8px;
`,W=i.default.p.withConfig({displayName:"product-card__NameProduct",componentId:"sc-2e625497-3"})`
    width: 100%;
    height: 24px;

    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;
    text-align: start;

    color: var(--inputs-and-icons);
`,q=i.default.hr.withConfig({displayName:"product-card__DividerInfosProduct",componentId:"sc-2e625497-4"})`
    width: 100%;
    height: 1px;
    
    border: none;

    background-color: var(--shapes-02);
`,G=i.default.p.withConfig({displayName:"product-card__PriceProduct",componentId:"sc-2e625497-5"})`
    width: 100%;
    height: 21px;

    color: var(--shapes-dark);
    
    font-family: inherit;
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;
    text-align: start;

`;function U(e){let i=(0,B.useRouter)();return(0,t.jsxs)(D,{onClick:()=>{i.push(`/produto?id=${e.id}`)},children:[(0,t.jsx)(A,{src:e.image_url}),(0,t.jsxs)(H,{className:R.className,children:[(0,t.jsx)(W,{children:e.name}),(0,t.jsx)(q,{}),(0,t.jsx)(G,{children:(0,M.formatPrice)(e.price_in_cents)})]})]})}let K=i.default.div.withConfig({displayName:"products-list__ContainerProducts",componentId:"sc-ba6fa53-0"})`
    width: 100%;
    
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    font-family: inherit;

    gap: 32px;
`;function Q(){let{type:e,organize:i,page:n,search:a}=(0,r.useFilter)(),o=(0,d.useDeferredValue)(a).toLowerCase(),{data:s}=(0,P.useQuery)({queryFn:()=>{let t,r;return(0,$.GET_FETCHER_PRODUCTS)((t=L(e),r=S(i),`
        query {
            allProducts(
                ${""!=t?`${t},`:""}
                page: ${n}, 
                perPage: 12,
                ${i>0?r:""}
            ) {
                id
                name
                image_url
                price_in_cents
            }
        }
    `))},queryKey:["products",e,i,n,o]});console.log(o);let l=s?.data?.data?.allProducts;return l=l?.filter(e=>e.name.toLowerCase().includes(o)),(0,t.jsx)(K,{children:l?.map(e=>(0,t.jsx)(U,{image_url:e.image_url,name:e.name,price_in_cents:e.price_in_cents,id:e.id},e.id))})}function V(){return(0,t.jsx)(z,{children:(0,t.jsx)(Q,{})})}function J(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m,{}),(0,t.jsx)(V,{})]})}e.s(["default",()=>J],52683)}]);