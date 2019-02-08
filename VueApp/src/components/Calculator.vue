<template>
    <div>
        <div class="Calculator">
            <div class="Calculator-container" :class="{'Calculator-container-dark': darkMode}">
                <div class="touch screen">
                    <input v-model="expression" type="text" @keyup.enter="calcul"/>
                </div>
                <div @click="copy()" class="touch result">
                    {{result}}
                </div>
                <div @click="print(0)" class="touch touch-0">0</div>
                <div @click="print(1)" class="touch touch-1">1</div>
                <div @click="print(2)" class="touch touch-2">2</div>
                <div @click="print(3)" class="touch touch-3">3</div>
                <div @click="print(4)" class="touch touch-4">4</div>
                <div @click="print(5)" class="touch touch-5">5</div>
                <div @click="print(6)" class="touch touch-6">6</div>
                <div @click="print(7)" class="touch touch-7">7</div>
                <div @click="print(8)" class="touch touch-8">8</div>
                <div @click="print(9)" class="touch touch-9">9</div>
                <div @click="print('.')" class="touch touch-comma">.</div>
                <div @click="calcul()" class="touch touch-equal">=</div>
                <div @click="print('+')" class="touch touch-plus">+</div>
                <div @click="print('-')" class="touch touch-moins">-</div>
                <div @click="print('/')" class="touch touch-divide">/</div>
                <div @click="print('*')" class="touch touch-multiply">x</div>
                <div @click="print('(')" class="touch touch-paranthesis-left">(</div>
                <div @click="print(')')" class="touch touch-paranthesis-right">)</div>
                <div @click="erase()" class="touch touch-suppr"><i class="eraser icon"></i></div>
                <div @click="clear()" class="touch touch-clear"><i class="trash icon"></i></div>
                <div @click="square()" class="touch touch-square">²</div>
            </div>
        </div>
        <div class="Calclator-historic">
            <div class="Calclator-historic-wrapper" v-for="(history, index) in historic" :key="index">
                <span @click="copyHistory(index)">{{history.expression}} = {{history.result}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import Math from 'mathjs'
import Vuex from 'vuex'

export default {
  data () {
    return {
      expression: '',
      result: '',
      historic: []
    }
  },
  methods: {
    print (touch) {
      this.expression = this.expression.concat(touch)
    },
    calcul () {
      this.result = Math.eval(this.expression)
      const historyObject = {
        result: this.result,
        expression: this.expression
      }
      this.historic.push(historyObject)
      this.expression = ''
    },
    erase () {
      this.expression = this.expression.substring(0, this.expression.length - 1)
    },
    copy () {
      this.expression = this.expression.concat(this.result)
    },
    square () {
      this.print('^2')
    },
    clear () {
      this.expression = ''
      this.result = ''
    },
    copyHistory (index) {
      console.log(index)
      this.expression = this.expression.concat(this.historic[index].result)
    }
  },
  computed: {
    ...Vuex.mapGetters(['darkMode'])
  }
}
</script>

<style lang="scss" scoped>
.Calculator {
    display: inline-block;
    padding: 20px;
}

.Calclator-historic {
    display: inline-block;
    padding: 20px;
    text-align: left;
    vertical-align: top;

    .Calclator-historic-wrapper {
        font-size: 30px;
        line-height: 40px;
        cursor: pointer;
    }
}

.Calculator-container {
    display: grid;
    grid-template-columns: 60px 60px 60px 60px 60px 60px;
    grid-template-rows: 180px 60px 60px 60px 60px 60px;
    width: 500px;
    margin: 0 30px;
    background: #efefef;
    grid-gap: 10px;
    place-items: center;
    place-content: center;

    &.Calculator-container-dark {
        background-color: #2c3e50;

        .result {
            color: #2c3e50;
        }
    }

    .touch {
        height: 100%;
        width: 100%;
        border: 2px solid #444;
        border-radius: 10px;
        vertical-align: middle;
        font-size: 20px;
        line-height: 50px;
        cursor: pointer;
    }

    .screen {
        grid-column: 1 / 7;
        grid-row: 1 / 2;

        input {
            height: 100%;
            width: 100%;
            border-radius: 11px;
            background-color: #0f0f0f;
            color: #F5F7FA;
            text-align: right;
            padding: 20px;
            font-size: 35px;
        }
    }

    .result {
        grid-column: 1 / 7;
        grid-row: 2 / 3;
        background-color: #fef4a9;
        font-size: 34px;
    }

    @for $i from 1 through 3 {
        .touch-#{$i} {
            grid-column-start: $i;
            grid-column-end: $i +1;
            grid-row: 5;
            background-color: #3b9a9c;
        }
    }
    @for $i from 4 through 6 {
        .touch-#{$i} {
            grid-column-start: $i -3;
            grid-column-end: $i -3;
            grid-row: 4;
            background-color: #3b9a9c;
        }
    }
    @for $i from 7 through 9 {
        .touch-#{$i} {
            grid-column-start: $i -6;
            grid-column-end: $i -6;
            grid-row: 3 / 3;
            background-color: #3b9a9c;
        }
    }

    .touch-plus {
        grid-column: 4 / 5;
        grid-row: 5 / 5;
    }

    .touch-moins {
        grid-column: 4 / 5;
        grid-row: 4 / 4;
    }

    .touch-multiply {
        grid-column: 5 / 6;
        grid-row: 5 / 5;
    }

    .touch-divide {
        grid-column: 5 / 6;
        grid-row: 4 / 4;
    }

    .touch-suppr {
        grid-column: 5 / 6;
        grid-row: 3 / 3;
    }

    .touch-square {
        grid-column: 4 / 5;
        grid-row: 3 / 3;
    }

    .touch-0 {
        grid-column: 1 / 2;
        grid-row: 6 / 6;
        background-color: #3b9a9c;
    }

    .touch-comma {
        grid-column: 2 / 3;
        grid-row: 6 / 6;
    }

    .touch-equal {
        grid-column: 3 / 7;
        grid-row: 6 / 6;
    }

    .touch-equal {
        background-color: #78fee0
    }

    .touch-comma, .touch-plus, .touch-moins,
    .touch-multiply, .touch-divide, .touch-square,
    .touch-paranthesis-left, .touch-paranthesis-right {
        background-color: #4bc2c5;
    }

    .touch-suppr, .touch-clear {
        background-color: #ea7070;
        font-size: 18px;
    }

    .touch-paranthesis-left {
        grid-column: 6 / 7;
        grid-row: 5 / 5;
    }

    .touch-paranthesis-right {
        grid-column: 6 / 7;
        grid-row: 4 / 4;
    }
}
</style>
