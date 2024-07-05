<template>
    <div class="container">
        <h1>404!</h1>
        <p>I guess that page doesn't exist</p>
        <slot></slot>
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f2f2f2;
        color: #333;
        text-align: center;
        font-family: 'Arial', sans-serif;
        width: 100vw;
    }
    
    h1 {
        font-size: 6rem;
        margin: 0;
        color: #ff6b6b;
    }
    
    p {
        font-size: 1.5rem;
        margin: 1rem 0;
    }
</style>
