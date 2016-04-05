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
        //parent 1
        var parent1Gender = $('#parent1-gender').val();
        var parent1Name = $('#parent1-first-name').val();
        var parent1MiddleName = $('#parent1-middle-name').val();
        var parent1LastName = $('#parent1-last-name').val();
        var parent1Birthday = $('#parent1-birthday-day').val();
        var parent1Address = $('#parent1-address').val();
        var parent1City = $('#parent1-address-city').val();
        var parent1Province = $('#parent1-address-province').val();
        var parent1Zip = $('#parent1-address-zip-code').val();
        var parent1Employment = $('#parent1-employment').val();
        var parent1Income = $('#parent1-income').val();
        //parent 2 - only get values if there is a second parent
        if ($('.parents-expanded').css('display') != 'none') {
            var parent2Gender = $('#parent2-gender').val();
            var parent2Name = $('#parent2-first-name').val();
            var parent2MiddleName = $('#parent2-middle-name').val();
            var parent2LastName = $('#parent2-last-name').val();
            var parent2Birthday = $('#parent2-birthday-day').val();
            var parent2Address = $('#parent2-address').val();
            var parent2City = $('#parent2-address-city').val();
            var parent2Province = $('#parent2-address-province').val();
            var parent2Zip = $('#parent2-address-zip-code').val();
            var parent2Employment = $('#parent2-employment').val();
            var parent2Income = $('#parent2-income').val();
        }
        //sibling 1 - only get values if there is a sibling
        if ($('.siblings-expanded-1').css('display') != 'none') {
            var sibling1Name = $('#sibling1-first-name').val();
            var sibling1MiddleName = $('#sibling1-middle-name').val();
            var sibling1LastName = $('#sibling1-last-name').val();
            var sibling1Gender = $('#sibling1-gender').val();
            var sibling1Birthday = new Date($('#sibling1-birthday-year').val(), $('#sibling1-birthday-month').val() - 1, $('#sibling1-birthday-day').val());
        }
        //sibling 2 - only get values if there is a sibling
        if ($('.siblings-expanded-2').css('display') != 'none') {
            var sibling2Name = $('#sibling2-first-name').val();
            var sibling2MiddleName = $('#sibling2-middle-name').val();
            var sibling2LastName = $('#sibling2-last-name').val();
            var sibling2Gender = $('#sibling2-gender').val();
            var sibling2Birthday = new Date($('#sibling2-birthday-year').val(), $('#sibling2-birthday-month').val() - 1, $('#sibling2-birthday-day').val());
        }
        //sibling 3 - only get values if there is a sibling
        if ($('.siblings-expanded-3').css('display') != 'none') {
            var sibling3Name = $('#sibling3-first-name').val();
            var sibling3MiddleName = $('#sibling3-middle-name').val();
            var sibling3LastName = $('#sibling3-last-name').val();
            var sibling3Gender = $('#sibling3-gender').val();
            var sibling3Birthday = new Date($('#sibling3-birthday-year').val(), $('#sibling3-birthday-month').val() - 1, $('#sibling3-birthday-day').val());
        }
        //sibling 4 - only get values if there is a sibling
        if ($('.siblings-expanded-4').css('display') != 'none') {
            var sibling4Name = $('#sibling4-first-name').val();
            var sibling4MiddleName = $('#sibling4-middle-name').val();
            var sibling4LastName = $('#sibling4-last-name').val();
            var sibling4Gender = $('#sibling4-gender').val();
            var sibling4Birthday = new Date($('#sibling4-birthday-year').val(), $('#sibling4-birthday-month').val() - 1, $('#sibling4-birthday-day').val());
        }
        //sibling 5 - only get values if there is a sibling
        if ($('.siblings-expanded-5').css('display') != 'none') {
            var sibling5Name = $('#sibling5-first-name').val();
            var sibling5MiddleName = $('#sibling5-middle-name').val();
            var sibling5LastName = $('#sibling5-last-name').val();
            var sibling5Gender = $('#sibling5-gender').val();
            var sibling5Birthday = new Date($('#sibling5-birthday-year').val(), $('#sibling5-birthday-month').val() - 1, $('#sibling5-birthday-day').val());
        }
        //sibling 6 - only get values if there is a sibling
        if ($('.siblings-expanded-6').css('display') != 'none') {
            var sibling6Name = $('#sibling6-first-name').val();
            var sibling6MiddleName = $('#sibling6-middle-name').val();
            var sibling6LastName = $('#sibling6-last-name').val();
            var sibling6Gender = $('#sibling6-gender').val();
            var sibling6Birthday = new Date($('#sibling6-birthday-year').val(), $('#sibling6-birthday-month').val() - 1, $('#sibling6-birthday-day').val());
        }
        //sibling 7 - only get values if there is a sibling
        if ($('.siblings-expanded-7').css('display') != 'none') {
            var sibling7Name = $('#sibling7-first-name').val();
            var sibling7MiddleName = $('#sibling7-middle-name').val();
            var sibling7LastName = $('#sibling7-last-name').val();
            var sibling7Gender = $('#sibling7-gender').val();
            var sibling7Birthday = new Date($('#sibling7-birthday-year').val(), $('#sibling7-birthday-month').val() - 1, $('#sibling7-birthday-day').val());
        }
        //sibling 8 - only get values if there is a sibling
        if ($('.siblings-expanded-8').css('display') != 'none') {
            var sibling8Name = $('#sibling8-first-name').val();
            var sibling8MiddleName = $('#sibling8-middle-name').val();
            var sibling8LastName = $('#sibling8-last-name').val();
            var sibling8Gender = $('#sibling8-gender').val();
            var sibling8Birthday = new Date($('#sibling8-birthday-year').val(), $('#sibling8-birthday-month').val() - 1, $('#sibling8-birthday-day').val());
        }
        //sibling 9 - only get values if there is a sibling
        if ($('.siblings-expanded-9').css('display') != 'none') {
            var sibling9Name = $('#sibling9-first-name').val();
            var sibling9MiddleName = $('#sibling9-middle-name').val();
            var sibling9LastName = $('#sibling9-last-name').val();
            var sibling9Gender = $('#sibling9-gender').val();
            var sibling9Birthday = new Date($('#sibling9-birthday-year').val(), $('#sibling9-birthday-month').val() - 1, $('#sibling9-birthday-day').val());
        }
        //sibling 10 - only get values if there is a sibling
        if ($('.siblings-expanded-10').css('display') != 'none') {
            var sibling10Name = $('#sibling10-first-name').val();
            var sibling10MiddleName = $('#sibling10-middle-name').val();
            var sibling10LastName = $('#sibling10-last-name').val();
            var sibling10Gender = $('#sibling10-gender').val();
            var sibling10Birthday = new Date($('#sibling10-birthday-year').val(), $('#sibling10-birthday-month').val() - 1, $('#sibling10-birthday-day').val());
        }
        //sibling 11 - only get values if there is a sibling
        if ($('.siblings-expanded-11').css('display') != 'none') {
            var sibling11Name = $('#sibling11-first-name').val();
            var sibling11MiddleName = $('#sibling11-middle-name').val();
            var sibling11LastName = $('#sibling11-last-name').val();
            var sibling11Gender = $('#sibling11-gender').val();
            var sibling11Birthday = new Date($('#sibling11-birthday-year').val(), $('#sibling11-birthday-month').val() - 1, $('#sibling11-birthday-day').val());
        }
        //sibling 12 - only get values if there is a sibling
        if ($('.siblings-expanded-12').css('display') != 'none') {
            var sibling12Name = $('#sibling12-first-name').val();
            var sibling12MiddleName = $('#sibling12-middle-name').val();
            var sibling12LastName = $('#sibling12-last-name').val();
            var sibling12Gender = $('#sibling12-gender').val();
            var sibling12Birthday = new Date($('#sibling12-birthday-year').val(), $('#sibling12-birthday-month').val() - 1, $('#sibling12-birthday-day').val());
        }
        //sibling 13 - only get values if there is a sibling
        if ($('.siblings-expanded-13').css('display') != 'none') {
            var sibling13Name = $('#sibling13-first-name').val();
            var sibling13MiddleName = $('#sibling13-middle-name').val();
            var sibling13LastName = $('#sibling13-last-name').val();
            var sibling13Gender = $('#sibling13-gender').val();
            var sibling13Birthday = new Date($('#sibling13-birthday-year').val(), $('#sibling13-birthday-month').val() - 1, $('#sibling13-birthday-day').val());
        }
        //sibling 14 - only get values if there is a sibling
        if ($('.siblings-expanded-14').css('display') != 'none') {
            var sibling14Name = $('#sibling14-first-name').val();
            var sibling14MiddleName = $('#sibling14-middle-name').val();
            var sibling14LastName = $('#sibling14-last-name').val();
            var sibling14Gender = $('#sibling14-gender').val();
            var sibling14Birthday = new Date($('#sibling14-birthday-year').val(), $('#sibling14-birthday-month').val() - 1, $('#sibling14-birthday-day').val());
        }
        //sibling 15 - only get values if there is a sibling
        if ($('.siblings-expanded-15').css('display') != 'none') {
            var sibling15Name = $('#sibling15-first-name').val();
            var sibling15MiddleName = $('#sibling15-middle-name').val();
            var sibling15LastName = $('#sibling15-last-name').val();
            var sibling15Gender = $('#sibling15-gender').val();
            var sibling15Birthday = new Date($('#sibling15-birthday-year').val(), $('#sibling15-birthday-month').val() - 1, $('#sibling15-birthday-day').val());
        }

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
                'picture': picture,
                'parents': [{   
                        'parent': parent1Gender,
                        'nombre': parent1Name,
                        'segundo': parent1MiddleName,
                        'apellido': parent1LastName,
                        'cumpleaños': parent1Birthday,
                        'direccion_de_casa': parent1Address,
                        'ciudad': parent1City,
                        'provinica': parent1Province,
                        'código_postal': parent1Zip,
                        'empleo': parent1Employment,
                        'ingresos': parent1Income  
                    }, {
                        'parent': parent2Gender,
                        'nombre': parent2Name,
                        'segundo': parent2MiddleName,
                        'apellido': parent2LastName,
                        'cumpleaños': parent2Birthday,
                        'direccion_de_casa': parent2Address,
                        'ciudad': parent2City,
                        'provinica': parent2Province,
                        'código_postal': parent2Zip,
                        'empleo': parent2Employment,
                        'ingresos': parent2Income  
                    }],
                'siblings': [{
                    'nombre': sibling1Name,
                    'segundo': sibling1MiddleName,
                    'apellido': sibling1LastName,
                    'género': sibling1Gender,
                    'cumpleaños': sibling1Birthday
                }, {
                    'nombre': sibling2Name,
                    'segundo': sibling2MiddleName,
                    'apellido': sibling2LastName,
                    'género': sibling2Gender,
                    'cumpleaños': sibling2Birthday
                }, {
                    'nombre': sibling3Name,
                    'segundo': sibling3MiddleName,
                    'apellido': sibling3LastName,
                    'género': sibling3Gender,
                    'cumpleaños': sibling3Birthday
                }, {
                    'nombre': sibling4Name,
                    'segundo': sibling4MiddleName,
                    'apellido': sibling4LastName,
                    'género': sibling4Gender,
                    'cumpleaños': sibling4Birthday
                }, {
                    'nombre': sibling5Name,
                    'segundo': sibling5MiddleName,
                    'apellido': sibling5LastName,
                    'género': sibling5Gender,
                    'cumpleaños': sibling5Birthday
                }, {
                    'nombre': sibling6Name,
                    'segundo': sibling6MiddleName,
                    'apellido': sibling6LastName,
                    'género': sibling6Gender,
                    'cumpleaños': sibling6Birthday
                }, {
                    'nombre': sibling7Name,
                    'segundo': sibling7MiddleName,
                    'apellido': sibling7LastName,
                    'género': sibling7Gender,
                    'cumpleaños': sibling7Birthday
                }, {
                    'nombre': sibling8Name,
                    'segundo': sibling8MiddleName,
                    'apellido': sibling8LastName,
                    'género': sibling8Gender,
                    'cumpleaños': sibling8Birthday
                }, {
                    'nombre': sibling9Name,
                    'segundo': sibling9MiddleName,
                    'apellido': sibling9LastName,
                    'género': sibling9Gender,
                    'cumpleaños': sibling9Birthday
                }, {
                    'nombre': sibling10Name,
                    'segundo': sibling10MiddleName,
                    'apellido': sibling10LastName,
                    'género': sibling10Gender,
                    'cumpleaños': sibling10Birthday
                }, {
                    'nombre': sibling11Name,
                    'segundo': sibling11MiddleName,
                    'apellido': sibling11LastName,
                    'género': sibling11Gender,
                    'cumpleaños': sibling11Birthday
                }, {
                    'nombre': sibling12Name,
                    'segundo': sibling12MiddleName,
                    'apellido': sibling12LastName,
                    'género': sibling12Gender,
                    'cumpleaños': sibling12Birthday
                }, {
                    'nombre': sibling13Name,
                    'segundo': sibling13MiddleName,
                    'apellido': sibling13LastName,
                    'género': sibling13Gender,
                    'cumpleaños': sibling13Birthday
                }, {
                    'nombre': sibling14Name,
                    'segundo': sibling14MiddleName,
                    'apellido': sibling14LastName,
                    'género': sibling14Gender,
                    'cumpleaños': sibling14Birthday
                }, {
                    'nombre': sibling15Name,
                    'segundo': sibling15MiddleName,
                    'apellido': sibling15LastName,
                    'género': sibling15Gender,
                    'cumpleaños': sibling15Birthday
                }]
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

    //button functionality for parent forms
    $('#add-a-parent').click(function() {
        if ($('.parents-expanded-1').css('display') == 'none') {
            $('.parents-expanded-1').show();
            $('#remove-a-parent').show();
        }
        else {
            $('.parents-expanded-2').show();
            $('#add-a-parent').hide();
        }
    });

    $('#remove-a-parent').click(function() {
        if ($('.parents-expanded-2').css('display') != 'none') {
            $('.parents-expanded-2').hide();
            $('#parent2-gender').val('');
            $('#parent2-first-name').val('');
            $('#parent2-middle-name').val('');
            $('#parent2-last-name').val('');
            $('#parent2-birthday-day').val('');
            $('#parent2-address').val('');
            $('#parent2-address-city').val('');
            $('#parent2-address-province').val('');
            $('#parent2-address-zip-code').val('');
            $('#parent2-employment').val('');
            $('#parent2-income').val('');
            $('#add-a-parent').show();  
        } else {
            $('.parents-expanded-1').hide();
            $('#parent1-gender').val('');
            $('#parent1-first-name').val('');
            $('#parent1-middle-name').val('');
            $('#parent1-last-name').val('');
            $('#parent1-birthday-day').val('');
            $('#parent1-address').val('');
            $('#parent1-address-city').val('');
            $('#parent1-address-province').val('');
            $('#parent1-address-zip-code').val('');
            $('#parent1-employment').val('');
            $('#parent1-income').val('');
            $('#remove-a-parent').hide();
        }
        
    });

    //button functionality for sibling forms
    var numSiblings = 1;
    $('#add-a-sibling').click(function() {
        if (numSiblings >= 15) {
            $('#add-a-sibling').hide();
        }
        $('.siblings-expanded-' + numSiblings).show();
        numSiblings++;
        $('#remove-a-sibling').show();
    });

    $('#remove-a-sibling').click(function() {
        numSiblings--;
        console.log('#sibling' + numSiblings +'-first-name');
        $('#sibling' + numSiblings +'-first-name').val('');
        $('#sibling' + numSiblings +'-middle-name').val('');
        $('#sibling' + numSiblings +'-last-name').val('');
        $('#sibling' + numSiblings +'-gender').val('');
        $('.siblings-expanded-' + numSiblings).hide();
        if (numSiblings <= 1) {
            $('#remove-a-sibling').hide();
        }
    });

});
