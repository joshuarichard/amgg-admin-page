$(document).ready(function() {
    // TODO:
    // 1. upload photo
    // 2. insert child doc and photo into db (base64 photo)
    // 3. birthday swizzling
    // 4. age in mongodb as derived field?
    // 5. confirm with brian about fields

    // disable the child submit button to start...
    $('#child-submit').prop('disabled', true);

    // ... and check every keyup to see if all required fields are full. if
    // they're all accounted for then enable the button
    $('.required').keyup(function() {
        var emptyFields = false;
        $('.required').each(function() {
            if ($(this).val() === '') {
                emptyFields = true;
            }
        });

        if (emptyFields === false) {
            $('#child-submit').prop('disabled', false);
        } else {
            $('#child-submit').prop('disabled', true);
        }
    });

    // on submit button click, collect all form data and submit child to DB
    $('#child-submit').click(function() {
        var name = $('#child-first-name').val();
        var middleName = $('#child-middle-name').val();
        var lastName = $('#child-last-name').val();
        var gender = $('#child-gender').val();
        var birthday = new Date($('#child-birthday-year').val(), $('#child-birthday-month').val() - 1, $('#child-birthday-day').val());
        var address = $('#child-address').val();
        var city = $('#child-address-city').val();
        var province = $('#child-address-province').val();
        var zip = $('#child-address-zip-code').val();
        var center = $('#child-center').val();
        var status = $('#child-status').val();
        var hobbies = $('#child-hobbies').val();
        var biodata = $('#child-biodata').val();
        var picture = document.getElementById('imageCanvas').toDataURL();

        console.log();

        // define the request
        $.ajax({
            url: '/api/v1/child/insert',
            type: 'POST',
            data: {
                'nombre': name,
                'apellido': lastName,
                'género': gender,
                'cumpleaños': birthday,
                'direccion_de_casa': address,
                'ciudad': city,
                'provinica': province,
                'código_postal': zip,
                'centro_de_ninos': center,
                'status': status,
                'aficiones': hobbies,
                'biodata': biodata,
                'picture': picture
            },
            success: function(res) {
                alert('niño inserta');
                clearForm();
                $('#child-submit').prop('disabled', true);
            },
            error: function(httpObj) {
                alert('que había un problema de insertar el niño');
            }
        });
    });

    $('#clear-form').click(function() {
        clearForm();
    });

    function clearForm() {
        $('#child-first-name').val('');
        $('#child-middle-name').val('');
        $('#child-last-name').val('');
        $('#child-gender').val('');
        // birthday
        $('#child-address').val('');
        $('#child-address-city').val('');
        $('#child-address-province').val('');
        $('#child-address-zip-code').val('');
        $('#child-center').val('');
        $('#child-hobbies').val('');
        $('#child-biodata').val('');
    }

    var imageLoader = document.getElementById('imageLoader');
    imageLoader.addEventListener('change', handleImage, false);
    var canvas = document.getElementById('imageCanvas');
    var ctx = canvas.getContext('2d');
    var imageContainerHeight= document.getElementById('image-child').clientHeight;

    function handleImage(e){
        var reader = new FileReader();
        reader.onload = function(event){
            var img = new Image();
            img.onload = function(){
                if (img.height > imageContainerHeight) {
                    img.width *= imageContainerHeight / img.height;
                    img.height = imageContainerHeight;
                }
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0, img.width, img.height);
            }
            img.src = event.target.result;
        }
        reader.readAsDataURL(e.target.files[0]);
    }
});
