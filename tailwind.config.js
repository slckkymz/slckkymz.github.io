module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.html'],
  content: [],
  theme: {
    container:{
      center : true
    },
    extend: {
      spacing :  {
        '10px' : "10px"
      },
      colors:{
        background : "#EFF9FF",
        primary : "#ECF3FF",
        secondary : "#B8CAF7",
        third : "#A2B3D3",
        fourth : "#7A86A1",
        fifth : "#202252",
        sixth : "#1BECBA",
        seventh : "#0FA27D",
        eighth : "#63D8E6",
        ninth : "#6149CD",
        tenth : "#F05A29",
        eleventh : "#F30134"
      },
      fontSize : {
        '4xl'  : "2.375rem",
        '5xl' : "2.875rem"
      },
      minWidth: {
        '10' : "100px"
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms')
  ],
}
