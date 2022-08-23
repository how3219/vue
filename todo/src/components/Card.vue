<template>
    <li class="Card">
        <span>
            <input class="checkbox" type="checkbox" :value="done" @click="toggleTodo" :checked="done" />
        </span>
        <span :class="{ done: done }" class="title">{{ todo.title }}</span>
        <span v-if="done" @click="deleteTodo()" class="material-icons-des"> close </span>
    </li>
</template>
<script>
import { computed } from 'vue';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Card',
    props: {
        todo: {
            type: Object,
            required: true,
        },
    },
    setup(props, context) {
        const done = computed(() => props.todo.done);
        return {
            done,
            toggoleTodo: () => {
                const value = {
                    ...props.todo,
                    done: !props.todo.done,
                };
                context.emit('change', value);
            },
            deleteTodo: () => {
                context.emit('delete', props.todo.id);
            },
        };
    },
};
</script>
<style scoped></style>
