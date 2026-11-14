import { buildQuoteMessage, validPhone } from './quote.mjs';

const menuButton=document.querySelector<HTMLButtonElement>('.menu-toggle');
const navigation=document.querySelector<HTMLElement>('#main-nav');
function closeMenu(){menuButton?.setAttribute('aria-expanded','false');navigation?.classList.remove('is-open');}
menuButton?.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));navigation?.classList.toggle('is-open',open);});
navigation?.addEventListener('click',event=>{if((event.target as HTMLElement).closest('a'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menuButton?.getAttribute('aria-expanded')==='true'){closeMenu();menuButton.focus();}});
const mobileQuery=matchMedia('(max-width: 1050px)'); mobileQuery.addEventListener('change',closeMenu);

document.querySelectorAll<HTMLElement>('[data-carousel]').forEach(carousel=>{
 const track=carousel.querySelector<HTMLElement>('[data-track]')!;
 const slides=Array.from(track.querySelectorAll<HTMLElement>('[data-slide]'));
 const pause=carousel.querySelector<HTMLButtonElement>('[data-pause]')!;
 const dots=Array.from(carousel.querySelectorAll<HTMLButtonElement>('[data-goto]'));
 const counter=carousel.querySelector<HTMLElement>('[data-counter]')!;
 const status=carousel.querySelector<HTMLElement>('[data-carousel-status]')!;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let index=0,paused=reduced.matches,hovered=false,focused=false,visible=true;
 let timer:ReturnType<typeof setInterval>|undefined;
 const render=()=>{slides.forEach((slide,i)=>{slide.inert=i!==index;});counter.textContent=String(index+1).padStart(2,'0')+' / '+String(slides.length).padStart(2,'0');dots.forEach((dot,i)=>dot.setAttribute('aria-pressed',String(index===i)));pause.textContent=paused?'Reproduzir':'Pausar';pause.setAttribute('aria-label',paused?'Reproduzir automaticamente':'Pausar reprodução automática');pause.setAttribute('aria-pressed',String(paused));};
 const go=(next:number,manual=false)=>{index=(next+slides.length)%slides.length;if(manual){paused=true;status.textContent='Fotografia '+(index+1)+' de '+slides.length;}track.scrollTo({left:slides[index].offsetLeft-track.offsetLeft,behavior:reduced.matches?'instant':'smooth'});render();updateTimer();};
 const updateTimer=()=>{if(timer)clearInterval(timer);if(!paused&&!hovered&&!focused&&visible&&!document.hidden&&slides.length>1)timer=setInterval(()=>go(index+1),6500);};
 carousel.querySelector('[data-prev]')?.addEventListener('click',()=>go(index-1,true));
 carousel.querySelector('[data-next]')?.addEventListener('click',()=>go(index+1,true));
 dots.forEach((dot,i)=>dot.addEventListener('click',()=>go(i,true)));
 pause.addEventListener('click',()=>{paused=!paused;render();updateTimer();});
 track.addEventListener('keydown',event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();go(index+(event.key==='ArrowRight'?1:-1),true);}});
 track.addEventListener('pointerdown',()=>{paused=true;render();updateTimer();});
 track.addEventListener('scroll',()=>{const nearest=slides.reduce((best,slide,i)=>Math.abs(slide.offsetLeft-track.offsetLeft-track.scrollLeft)<Math.abs(slides[best].offsetLeft-track.offsetLeft-track.scrollLeft)?i:best,0);if(nearest!==index){index=nearest;render();}},{passive:true});
 carousel.addEventListener('mouseenter',()=>{hovered=true;updateTimer();});
 carousel.addEventListener('mouseleave',()=>{hovered=false;updateTimer();});
 carousel.addEventListener('focusin',()=>{focused=true;updateTimer();});
 carousel.addEventListener('focusout',()=>{setTimeout(()=>{focused=carousel.contains(document.activeElement);updateTimer();},0);});
 document.addEventListener('visibilitychange',updateTimer);
 reduced.addEventListener('change',()=>{if(reduced.matches)paused=true;render();updateTimer();});
 if('IntersectionObserver' in window)new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;updateTimer();},{threshold:0.15}).observe(carousel);
 render();updateTimer();
});

document.querySelectorAll<HTMLElement>('[data-gallery]').forEach(gallery=>{
 const items=Array.from(gallery.querySelectorAll<HTMLElement>('[data-category]'));
 const buttons=gallery.querySelectorAll<HTMLButtonElement>('[data-filter]');
 buttons.forEach(button=>button.addEventListener('click',()=>{const filter=button.dataset.filter;items.forEach(item=>item.hidden=filter!=='todos'&&item.dataset.category!==filter);buttons.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));gallery.querySelector('[data-gallery-status]')!.textContent=items.filter(i=>!i.hidden).length+' fotografias exibidas.';}));
 const dialog=document.createElement('dialog');dialog.className='photo-dialog';
 const close=document.createElement('button');close.type='button';close.className='dialog-close';close.textContent='Fechar ×';close.setAttribute('aria-label','Fechar fotografia ampliada');
 const image=document.createElement('img');const caption=document.createElement('p');dialog.append(close,image,caption);document.body.append(dialog);
 let opener:HTMLButtonElement|undefined;
 const restore=()=>opener?.focus();
 close.addEventListener('click',()=>dialog.close());dialog.addEventListener('close',restore);
 dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
 gallery.querySelectorAll<HTMLButtonElement>('[data-zoom]').forEach(button=>button.addEventListener('click',()=>{const original=button.querySelector('img')!;opener=button;image.src=original.src;image.alt=original.alt;caption.textContent=original.alt;dialog.showModal();close.focus();}));
});

const quoteForm=document.querySelector<HTMLFormElement>('[data-quote-form]');
quoteForm?.addEventListener('submit',event=>{
 event.preventDefault();
 const status=quoteForm.querySelector<HTMLElement>('[data-form-status]')!;
 const data=new FormData(quoteForm);
 const fields=Object.fromEntries(data.entries()) as Record<string,string>;
 const phone=quoteForm.elements.namedItem('telefone') as HTMLInputElement;
 phone.setCustomValidity(validPhone(fields.telefone)?'':'Informe um telefone com DDD (10 ou 11 dígitos).');
 if(!quoteForm.reportValidity())return;
 const url='https://wa.me/'+quoteForm.dataset.wa+'?text='+encodeURIComponent(buildQuoteMessage(fields));
 const opened=window.open(url,'_blank','noopener,noreferrer');
 status.textContent='Confira a mensagem e confirme o envio no WhatsApp.';
 const fallback=document.createElement('a');fallback.href=url;fallback.textContent='Abrir a mensagem no WhatsApp';fallback.target='_blank';fallback.rel='noopener noreferrer';
 status.append(' ',fallback);void opened;
});
quoteForm?.querySelector<HTMLInputElement>('[name="telefone"]')?.addEventListener('input',event=>(event.target as HTMLInputElement).setCustomValidity(''));
