"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8905],{3995:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=l(5893),t=l(1151);const o={},s="Ollama",r={id:"llms/ollama",title:"Ollama",description:"1. Go to Ollama and follow the instructions to serve a LLM model on your local environment.",source:"@site/docs/llms/ollama.md",sourceDirName:"llms",slug:"/llms/ollama",permalink:"/TaskWeaver/docs/llms/ollama",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/TaskWeaver/tree/docs/website/docs/llms/ollama.md",tags:[],version:"current",frontMatter:{},sidebar:"documentSidebar",previous:{title:"LiteLLM",permalink:"/TaskWeaver/docs/llms/liteLLM"},next:{title:"Gemini",permalink:"/TaskWeaver/docs/llms/gemini"}},i={},c=[];function m(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"ollama",children:"Ollama"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Go to ",(0,a.jsx)(n.a,{href:"https://github.com/jmorganca/ollama",children:"Ollama"})," and follow the instructions to serve a LLM model on your local environment.\r\nWe provide a short example to show how to configure the ollama in the following, which might change if ollama makes updates."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="install ollama and serve LLMs in local" showLineNumbers',children:"## Install ollama on Linux & WSL2\r\ncurl https://ollama.ai/install.sh | sh\r\n## Run the serving\r\nollama serve\r\n## Open another terminal and run the model\r\nollama run llama2\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"We recommend deploying the LLM with a parameter scale exceeding 13B for enhanced performance (such as Llama 2 13B)."})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["When serving LLMs via Ollama, it will by default start a server at ",(0,a.jsx)(n.code,{children:"http://localhost:11434"}),", which will later be used as the API base in ",(0,a.jsx)(n.code,{children:"taskweaver_config.json"}),"."]})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsxs)(n.li,{children:["Add following configuration to ",(0,a.jsx)(n.code,{children:"taskweaver_config.json"}),":"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",metastring:"showLineNumbers",children:'{\r\n    "llm.api_base": "http://localhost:11434",\r\n    "llm.api_key": "ARBITRARY_STRING",\r\n    "llm.api_type": "ollama",\r\n    "llm.model": "llama2:13b"\r\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["NOTE: ",(0,a.jsx)(n.code,{children:"llm.api_base"})," is the URL started in the Ollama LLM server and ",(0,a.jsx)(n.code,{children:"llm.model"})," is the model name of Ollama LLM."]}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsxs)(n.li,{children:["Start TaskWeaver and chat with TaskWeaver.\r\nYou can refer to the ",(0,a.jsx)(n.a,{href:"/TaskWeaver/docs/quickstart",children:"Quick Start"})," for more details."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},1151:(e,n,l)=>{l.d(n,{Z:()=>r,a:()=>s});var a=l(7294);const t={},o=a.createContext(t);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);