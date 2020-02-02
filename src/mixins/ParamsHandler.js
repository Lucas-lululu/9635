export default {
    methods: {
        JsonToGetParams(params) {

            const str = [];
            for (let p in params) {
                str.push(
                    encodeURIComponent(p) + '=' + encodeURIComponent(params[p]),
                );
            }
            let body = null;
            if (str.length > 0) {
                body = str.join('&');
            }
            return body;
        },

        _go_teacher_detail_(id) {
            this.$router.push(`/web/teacher/detail?teacherId=${id}`);
            this.$emit("id", 1);
        },

        _go_article_detail_(id) {
            this.$router.push(`/web/article/detail?articleId=${id}`);
        },

        _netGet(url, data){
            const str = [];
            for (let p in data) {
                str.push(
                    encodeURIComponent(p) + '=' + encodeURIComponent(data[p]),
                );
            }
            let body = null;
            if (str.length > 0) {
                body = str.join('&');
            }
            return this.$api.get(url+'?' +body);
        },
    }
}
