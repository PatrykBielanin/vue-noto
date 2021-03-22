export const getViewStyleColor = {
    data(){
        return{
            viewStyleColor: null
        }
    },
    watch:{
        $route(){
            if(this.$route.path == "/") {
                this.viewStyleColor = "rgb(0, 0, 0)"
            } else if (this.$route.path == "/notes"){
                this.viewStyleColor = "rgba(247, 92, 92, 1)";
            } else if (this.$route.path == "/todos"){
                this.viewStyleColor = "rgba(92, 210, 246, 1)";
            } else if (this.$route.path == "/about"){
                this.viewStyleColor = "rgba(246, 194, 92, 1)";
            }
        }
    },
    created(){
        viewStyleColor: {
            if(this.$route.path == "/") {
                this.viewStyleColor = "rgb(0, 0, 0)"
            } else if (this.$route.path == "/notes"){
                this.viewStyleColor = "rgba(247, 92, 92, 1)";
            } else if (this.$route.path == "/todos"){
                this.viewStyleColor = "rgba(92, 210, 246, 1)";
            } else if (this.$route.path == "/about"){
                this.viewStyleColor = "rgba(246, 194, 92, 1)";
            }
        }
    }
}
