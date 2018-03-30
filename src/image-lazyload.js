    /**
     * vue 图片懒加载 for vue2    --akb48-1
     * 
     * import Lazyload from './image-lazyload';
     * Vue.use(Lazyload, {
     *     defaultUrl : '/static/loading.gif'
     * });
     */
import 'intersection-observer';

function bind(el, binding) {
    el.src = params.defaultUrl
    el.placeholder = binding.value;
}
function inserted(el, binding) {
    io.observe(el);
}
function update(el, binding) {
    console.log(el, binding)
}
function unbind(el) {
    console.log(el, binding)
}

const  hookFn = {
    bind: (el, binding) => bind(el, binding),
    inserted: (el, binding) => inserted(el, binding),
    update: (el, binding) => update(el, binding),
    unbind: (el, binding) => unbind(el, binding),
}

var params = {};
export default {
    install(Vue, options = {}) {
        if(!options.defaultUrl) return console.error('defaultUrl is undefined');
        params = options;
        Vue.directive('lazy', hookFn);
    }
}

const io = new IntersectionObserver((entries) => {
        entries.forEach(entrie => {
            fadeOut(entrie.target);
            if (entrie.intersectionRatio <= 0.3) return;
                loadEvent(entrie.target, entrie.target.placeholder);
        });
},{
    threshold: [.3]
});

const loadEvent = function(el, url) {

    // 开始更新图片
    uploadImg(el, url);

    function uploadImg (el, url) {

        var state = el.getAttribute('lazy') ? el.getAttribute('lazy') : 'pendding';
            //el.setAttribute('lazy', state);
        var img = new Image();

            switch(state)
            {
                case 'pendding':
                    el.src = img.src = url;
                    img.onload = function() {
                        el.setAttribute('lazy', 'success');
                        fadeIn(el);
                        io.unobserve(el);
                    };
                    img.onerror = function() {
                        el.setAttribute('lazy', 'error');
                        el.src = img.src = params.defaultUrl;
                        fadeIn(el);
                    };
                    break;
                default:
                    break;
            };
    }
}


// 过渡动画
var transitionend = 'transition' in window.document.body.style? 'transitionend' : 'webkitTransitionend';
var transition = 'transition' in window.document.body.style? 'transition' : 'webkitTransition';

var fadeOut = (el) => {
    el.style.opacity = 0;
    el.style[transition] = 'opacity .3s';
}

var fadeIn = (el) => {
    el.style.opacity = 1;
    
    el.addEventListener(transitionend, callback(el));
    el.removeEventListener(transitionend, callback);

    function callback(el) {
        el.style.cssText = '';
    }
}
