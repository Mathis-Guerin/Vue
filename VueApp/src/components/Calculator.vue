<template>
    <div class="Calculator">
        <div class="Calculator-container">
            <div class="touch screen">
                <input type="text"/>
            </div>
            <div class="touch result">
                Résultat
            </div>
            <div class="touch touch-1">1</div>
            <div class="touch touch-2">2</div>
            <div class="touch touch-3">3</div>
            <div class="touch touch-4">4</div>
            <div class="touch touch-5">5</div>
            <div class="touch touch-6">6</div>
            <div class="touch touch-7">7</div>
            <div class="touch touch-8">8</div>
            <div class="touch touch-9">9</div>
            <div class="touch touch-equal">=</div>
            <div class="touch touch-plus">+</div>
            <div class="touch touch-moins">-</div>
            <div class="touch touch-divide">/</div>
            <div class="touch touch-multiply">x</div>
            <div class="touch touch-suppr">Suppr.</div>
            <div class="touch touch-square">²</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.Calculator {
    padding: 20px;
}

.Calculator-container {
    display: grid;
    grid-template-columns: 60px 60px 60px 60px 60px 60px;
    grid-template-rows: 180px 60px 60px 60px 60px;
    width: 500px;
    margin: 0 auto;
    background: #efefef;
    grid-gap: 10px;
    place-items: center;
    place-content: center;

    .touch {
        height: 100%;
        width: 100%;
        background-color: #cacaca;
        border: 2px solid #444;
        border-radius: 10px;
    }

    .screen {
        grid-column: 1 / 7;
        grid-row: 1 / 2;
        background-color: blue;
    }

    .result {
        grid-column: 1 / 7;
        grid-row: 2 / 3;
        background-color: #ef1245;
    }

    @for $i from 1 through 3 {
        .touch-#{$i} {
            grid-column-start: $i;
            grid-column-end: $i +1;
            grid-row: 5;
        }
    }
    @for $i from 4 through 6 {
        .touch-#{$i} {
            grid-column-start: $i -3;
            grid-column-end: $i -3;
            grid-row: 4;
        }
    }
    @for $i from 7 through 9 {
        .touch-#{$i} {
            grid-column-start: $i -6;
            grid-column-end: $i -6;
            grid-row: 3 / 3;
        }
    }

    .touch-equal {
        grid-column: 4 / 7;
        grid-row: 5 / 5;
    }

    .touch-plus {
        grid-column: 4 / 5;
        grid-row: 4 / 4;
    }

    .touch-moins {
        grid-column: 4 / 5;
        grid-row: 3 / 3;
    }

    .touch-multiply {
        grid-column: 5 / 6;
        grid-row: 4 / 4;
    }

    .touch-divide {
        grid-column: 5 / 6;
        grid-row: 3 / 3;
    }

    .touch-suppr {
        grid-column: 6 / 7;
        grid-row: 4 / 4;
    }

    .touch-square {
        grid-column: 6 / 7;
        grid-row: 3 / 3;
    }
}
</style>
