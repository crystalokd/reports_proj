console.log('hello world')



const reportBtn = document.getElementById('report-btn')
const img = document.getElementById('img')
const modalBody = document.getElementById('modal-body')
const reportForm = document.getElementById('report-Form')



const reportName = document.getElementById('id_Name')
const reportRemarks = document.getElementById('id_Remarks')
const csrf = document.getElementsByName('csrfmiddlewaretoken')
console.log(csrf)

console.log(report-btn)
console.log(img)


if (img){
    reportBtn.classList.remove('not-visible')
}


reportBtn.addEventListener('click', () => {
    console.log('clicked')
    img.setAttribute('class', 'w-100')
    modalBody.prepend(img)

    console.log(img.src)

    reportForm.addEventListener('submit', e=>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('csrfmiddlewaretoken', csrf)
        formData.append('name', reportName.value)
        formData.append('remarks', reportRemarks.value)
        formData.append('image', img.src)

        $.ajax({
            type: 'POST',
            url: '',
            data: formData,
            success: function(response){
                console.log(response)
            },
            error: function(error){
                console.log(error)
            },
            processData:false,
            contentType: false,
        })
    })
})