console.log('hello world');
window.onload = function(){

    const postBox = document.getElementById('posts-box');
    const spinnerBox = document.getElementById('spinner-box');
    const loadBtn = document.getElementById("load-btn");
    const loadBox = document.getElementById('load-box');

    let visible = 3;

    const handleGetData = () =>{
        $.ajax({
            type : 'GET',
            url : `/posts-json/${visible}`,
            success: function(response){
                // console.log(response.data)
                max_size = response.max
                const data = response.data;
                data.map(post =>{
                    console.log(post.id)
                    postBox.innerHTML += `<div class='card'>
                                            ${post.name} <br>
                                            ${post.body}
                                         </div>`
                                                 
                });
                if(max_size){
                    console.log('Done')
                    loadBox.innerHTML += `<h4> No more post to load <h4>`
                    loadBtn.disabled = true
                }
            },
            error: function(error){
                console.log(error,'not found')
            }
        });
    };

    handleGetData();

        loadBtn.addEventListener('click', ()=>{
            visible +=3;
            handleGetData();
        });
}
// loadBtn.addEventListener('click', ()=>{
//     visible +=3;
//     handleGetData();
// });