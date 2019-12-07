<template>
  <div class="uk-padding">
    <vk-card type="blank" class="uk-width-1-1">
      <vk-card-title>{{ name }}</vk-card-title>
      <div class="uk-panel">
        <img :src="require(`../assets/${name}.jpg`)" class="uk-align-left uk-margin-remove-adjacent"/>
        <p>{{ descriere }}</p>
      </div>
    </vk-card>
  </div>
</template>

<script>
    export default {
        name: "autor",
        data () {
            return {
                name: '',
                descriere: ''
            }
        },
        created() {
            this.getNameImage();
            this.getDescription();
            this.scrollUp();
        },
        methods: {
            getNameImage () {
                this.name = this.$route.params.name;
            },
            getDescription () {
                this.descriere = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus sed odio tempor lobortis. Vestibulum congue, nunc eget luctus malesuada, elit nibh aliquam urna, maximus lacinia orci nibh eget ligula. Aliquam in sollicitudin lorem, id accumsan sapien. Fusce in egestas elit. Nam iaculis sodales velit sit amet luctus. Donec elementum tempor neque vel dignissim. Fusce dapibus ut ligula sed venenatis. Praesent dignissim mi risus, eleifend placerat magna volutpat vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu pretium enim, non placerat tortor. Nullam at eros quis lacus tristique bibendum sed eu nunc. Nunc sed ex et lectus feugiat hendrerit. Maecenas ultrices tellus diam, ac maximus leo vehicula quis. Donec rutrum, sem ut iaculis posuere, libero diam pulvinar nulla, eu luctus elit sapien quis odio.\n' +
                    '\n' +
                    'Nunc et magna ullamcorper, euismod diam porttitor, facilisis enim. Suspendisse leo nulla, ultricies sed ante vitae, dignissim varius risus. Morbi porttitor et neque sit amet elementum. In consectetur faucibus semper. Etiam ex ex, rutrum id placerat vel, suscipit aliquet urna. Maecenas enim justo, elementum eu aliquam non, rutrum luctus massa. Mauris quis mollis libero, a scelerisque neque. Proin vitae ante nisi. Nam vulputate ornare sapien non malesuada. Maecenas iaculis accumsan maximus. Duis commodo arcu in ornare commodo.\n' +
                    '\n' +
                    'Curabitur nec dui lobortis elit posuere gravida. Fusce tellus ex, fermentum in lobortis non, placerat at justo. Nullam id dolor eget nulla mollis accumsan et vel magna. Nulla facilisi. Proin sed sapien luctus, facilisis ipsum in, pellentesque nisi. Donec id ullamcorper eros. Proin porttitor, leo at elementum pulvinar, arcu quam congue arcu, vitae placerat purus orci in ex. Aenean at enim scelerisque, accumsan sapien quis, blandit nibh. Donec egestas libero orci, sit amet eleifend dui sodales at. Phasellus elit purus, tincidunt eget volutpat sed, euismod at nulla.\n' +
                    '\n' +
                    'Suspendisse ullamcorper bibendum rutrum. In nisl tellus, fermentum eu cursus vel, aliquam suscipit tellus. Suspendisse scelerisque efficitur purus. Etiam at purus vitae turpis suscipit imperdiet non eget risus. Aenean euismod nec odio nec aliquet. Praesent in lorem eu sem posuere blandit. Etiam molestie, sem quis iaculis fermentum, risus lectus gravida libero, vitae aliquam metus est vel dui. Nam mattis dignissim rutrum. Sed sit amet dignissim orci, vel consectetur quam. Fusce et faucibus leo, sit amet iaculis mi. Nullam pellentesque aliquam est nec dapibus. Phasellus nec libero lacus. Nullam sodales, ipsum ullamcorper tincidunt vestibulum, lorem eros pellentesque tortor, vestibulum feugiat urna nunc id odio. Nulla ultrices finibus nibh volutpat pellentesque. Vivamus non molestie justo, sit amet pellentesque tellus.\n' +
                    '\n' +
                    'Aenean eleifend varius dolor, sed molestie arcu tincidunt id. Sed urna velit, dapibus sit amet porttitor id, porta non justo. Aliquam eleifend congue enim, ut varius lorem vehicula et. Ut ut felis placerat, auctor quam quis, lacinia turpis. Morbi tincidunt velit ac lacus tempus ornare. Vivamus ullamcorper, dui eget convallis ultrices, justo sapien rhoncus risus, eget aliquet turpis est non leo. Pellentesque ac lorem gravida, rhoncus purus eu, interdum risus. Sed faucibus consequat metus, eu pharetra quam egestas id. Vivamus posuere sit amet tortor pharetra viverra. Aenean ornare, velit vitae tristique volutpat, odio mi laoreet lectus, id mattis dui sem quis sapien.'
            },
            scrollUp () {
                window.scrollTo(0, 0);
            }
        }
    }
</script>

<style scoped>

</style>