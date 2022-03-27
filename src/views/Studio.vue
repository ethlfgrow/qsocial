<template>
    <div>
        <SideBar/>
        <h1>Studio</h1>
    </div>
</template>


<script>
import SideBar from '@/components/SideBarStudio'

export default {
  name: 'Studio',
  components: {
    SideBar,
  },
  data: () => ({
    model: null,
    slides: [
      { id: 1, src: require('@/assets/01.jpg'), text: 'Cheb Khaled' },
      { id: 2, src: require('@/assets/02.jpeg'), text: 'Soolking' },
      { id: 3, src: require('@/assets/03.png'), text: 'Chakira' },
      { id: 4, src: require('@/assets/04.jpg'), text: 'Cheb Khaled' },
      { id: 5, src: require('@/assets/05.jpeg'), text: 'Soolking' },
      { id: 6, src: require('@/assets/06.png'), text: 'Chakira' },
      { id: 7, src: require('@/assets/07.jpg'), text: 'Cheb Khaled' },
      { id: 8, src: require('@/assets/08.jpeg'), text: 'Soolking' },
      { id: 9, src: require('@/assets/09.png'), text: 'Chakira' },
      { id: 10, src: require('@/assets/10.jpg'), text: 'Cheb Khaled' },
      { id: 11, src: require('@/assets/11.jpeg'), text: 'Soolking' },
      { id: 12, src: require('@/assets/12.png'), text: 'Chakira' },
    ],
  }),
}
</script>