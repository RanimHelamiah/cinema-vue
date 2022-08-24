export default (await import('vue')).defineComponent({
data() {
return {};
},
methods: {
next() {
this.$emit('next');
},
prev() {
this.$emit('prev');

},
}
});
const __VLS_template = () => ({});
