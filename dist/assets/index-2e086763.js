(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c=document.getElementById("submitBtn"),r=document.getElementById("validationOptions"),d=document.getElementById("userInput");c.addEventListener("click",()=>u());r.addEventListener("change",()=>a());function a(){d.value="";const o=document.getElementById("valid"),n=document.getElementById("invalid");o.classList.contains("hidden")||o.classList.add("hidden"),n.classList.contains("hidden")||n.classList.add("hidden");const s=document.getElementById("validationOptions").value,i={Email:"ex. example@gmail.com","Phone Number":"ex. 017*******4","Post Code":"ex. 1234"};s in i?d.placeholder=i[s]:d.placeholder="Enter the input to validate"}function u(){const o=document.getElementById("validationOptions").value,n=document.getElementById("valid"),s=document.getElementById("invalid"),i={Email:/^[\w\.-]+@[\w\.-]+\.\w+$/,"Phone Number":/^(\+\d{13}|\d{11})$/,"Post Code":/^\d{4}$/};if(o in i){const t=i[o].test(d.value);n.classList.toggle("hidden",!t),s.classList.toggle("hidden",t)}else document.getElementById("validationResult").innerText="Option not found"}