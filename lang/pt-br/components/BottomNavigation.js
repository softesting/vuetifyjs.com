export default {
  header: 'Bottom nav',
  headerText: 'O `v-bottom-nav` é uma alternativa à barra lateral. É usado principalmente em dispositivos móveis e tem duas variações: ícones e textos, e deslocamento.',
  components: ['v-bottom-nav'],
  examples: [{
    iconsAndText: {
      header: 'Ícones e texto',
      desc: 'Enquanto a navegação inferior deve ser usada com o `vue-router`, você também pode controlar programaticamente o estado ativo dos botões usando a propriedade `active.sync`. Você pode alterar o valor de um botão usando o atributo `value`.'
    },
    colorAndShift: {
      header: 'Cor e deslocamento',
      desc: 'Ao usar um fundo colorido, recomenda-se usar a propriedade `light`. A propriedade `shift` esconderá o texto do botão até estar ativo. Tenha em mente que o texto de `v-btn` é necessário para ser envolvido em uma tag `<span>`.'
    },
    toggle: {
      header: 'Alternância',
      desc: 'Assim como em outros componentes do Vuetify, você pode controlar o estado da exibição com `v-model`.'
    }
  }],
  props: {
    active: 'Mantém o valor do botão atualmente ativo. Se o botão não tiver um valor atribuído, seu índice será usado. Esta propriedade suporta o modificador **.sync**.',
    absolute: 'Mixins.Positionable.props.absolute',
    fixed: 'Mixins.Positionable.props.fixed'
  }
}
