$(document).ready(function() {
    // on submit button click, collect all form data and submit child to DB
    $('#child-submit').click(function() {
        //declare data to be submited to the db
        var data = { };

        //get the child's info from the main form
        var childInputs = $( ':input', '.child' );
        childInputs.each(function() {
            if ($(this).val() != '') {
                data[$(this).attr("name")] = $(this).val();
            }
        });
        data['cumpleaños'] = new Date($('#child-birthday-year').val(), $('#child-birthday-month').val() - 1, $('#child-birthday-day').val());
        if (document.getElementById("imageLoader").files.length != 0) {
            var picture = document.getElementById('imageCanvas').toDataURL();
        }

        // getting the values from the education form
        var educationInputs = $( ':input', '.education' );
        educationInputs.each(function() {
            if ($(this).val() != '') {
                data[$(this).attr("name")] = $(this).val();
            }
        });

        //health
        var healthInputs = $( ':input', '.physical-health' );
        healthInputs.each(function() {
            if ($(this).val() != '') {
                data[$(this).attr("name")] = $(this).val();
            }
        });

        //parent 1
        data.parents = [];
        var parent1 = { };
        var parent1Inputs = $( ':input', '.parents-expanded-1' );
        parent1Inputs.each(function() {
            if ($(this).val() != '') {
                parent1[$(this).attr("name")] = $(this).val();
            }
        });
        data.parents.push(parent1);
        data.parents[0]['cumpleaños'] = new Date($('#parent1-birthday-year').val(), $('#parent1-birthday-month').val() - 1, $('#parent1-birthday-day').val());
        console.log(data.parents[0]);

        var parent2 = { };
        var parent2Inputs = $( ':input', '.parents-expanded-2' );
        parent2Inputs.each(function() {
            if ($(this).val() != '') {
                parent2[$(this).attr("name")] = $(this).val();
            }
        });
        data.parents.push(parent2);
        data.parents[1]['cumpleaños'] = new Date($('#parent1-birthday-year').val(), $('#parent1-birthday-month').val() - 1, $('#parent1-birthday-day').val());

        data.siblings = [];
        var sibling1 = { };
        var sibling1Inputs = $( ':input', '.siblings-expanded-1' );
        sibling1Inputs.each(function() {
            if ($(this).val() != '') {
                sibling1[$(this).attr("name")] = $(this).val();
            }
        });
        data.siblings.push(sibling1);
        data.siblings[0]['cumpleaños'] = new Date($('#sibling1-birthday-year').val(), $('#sibling1-birthday-month').val() - 1, $('#sibling1-birthday-day').val());

        var sibling2 = { };
        var sibling2Inputs = $( ':input', '.siblings-expanded-2' );
        sibling2Inputs.each(function() {
            if ($(this).val() != '') {
                sibling2[$(this).attr("name")] = $(this).val();
            }
        });
        data.siblings.push(sibling2);
        data.siblings[1]['cumpleaños'] = new Date($('#sibling2-birthday-year').val(), $('#sibling2-birthday-month').val() - 1, $('#sibling2-birthday-day').val());

        var sibling3 = { };
        var sibling3Inputs = $( ':input', '.siblings-expanded-3' );
        sibling3Inputs.each(function() {
            if ($(this).val() != '') {
                sibling3[$(this).attr("name")] = $(this).val();
            }
        });
        data.siblings.push(sibling3);
        data.siblings[2]['cumpleaños'] = new Date($('#sibling3-birthday-year').val(), $('#sibling3-birthday-month').val() - 1, $('#sibling3-birthday-day').val());

        var sibling4 = { };
        var sibling4Inputs = $( ':input', '.siblings-expanded-4' );
        sibling4Inputs.each(function() {
            if ($(this).val() != '') {
                sibling4[$(this).attr("name")] = $(this).val();
            }
        });
        data.siblings.push(sibling4);
        data.siblings[3]['cumpleaños'] = new Date($('#sibling4-birthday-year').val(), $('#sibling4-birthday-month').val() - 1, $('#sibling4-birthday-day').val());

        var sibling5 = { };
        var sibling5Inputs = $( ':input', '.siblings-expanded-5' );
        sibling5Inputs.each(function() {
            if ($(this).val() != '') {
                sibling5[$(this).attr("name")] = $(this).val();
            }
        });
        data.siblings.push(sibling5);
        data.siblings[4]['cumpleaños'] = new Date($('#sibling5-birthday-year').val(), $('#sibling5-birthday-month').val() - 1, $('#sibling5-birthday-day').val());

        var sibling6 = { };
        var sibling6Inputs = $( ':input', '.siblings-expanded-6' );
        sibling6Inputs.each(function() {
            if ($(this).val() != '') {
                sibling6[$(this).attr("name")] = $(this).val();
            }
        });
        data.siblings.push(sibling6);
        data.siblings[5]['cumpleaños'] = new Date($('#sibling6-birthday-year').val(), $('#sibling6-birthday-month').val() - 1, $('#sibling6-birthday-day').val());
        console.log(data);
        // //sibling 1 - only get values if there is a sibling
        // if ($('.siblings-expanded-1').css('display') != 'none') {
        //     var sibling1Name = $('#sibling1-first-name').val();
        //     var sibling1MiddleName = $('#sibling1-middle-name').val();
        //     var sibling1LastName = $('#sibling1-last-name').val();
        //     var sibling1Gender = $('#sibling1-gender').val();
        //     var sibling1Birthday = new Date($('#sibling1-birthday-year').val(), $('#sibling1-birthday-month').val() - 1, $('#sibling1-birthday-day').val());
        //     var sibling1Occupation = $('#sibling1-occupation').val();
        //     var sibling1Sponsored = $('#sibling1-is-sponsored').val();
        // }
        // //sibling 2 - only get values if there is a sibling
        // if ($('.siblings-expanded-2').css('display') != 'none') {
        //     var sibling2Name = $('#sibling2-first-name').val();
        //     var sibling2MiddleName = $('#sibling2-middle-name').val();
        //     var sibling2LastName = $('#sibling2-last-name').val();
        //     var sibling2Gender = $('#sibling2-gender').val();
        //     var sibling2Birthday = new Date($('#sibling2-birthday-year').val(), $('#sibling2-birthday-month').val() - 1, $('#sibling2-birthday-day').val());
        //     var sibling2Occupation = $('#sibling2-occupation').val();
        //     var sibling2Sponsored = $('#sibling2-is-sponsored').val();
        // }
        // //sibling 3 - only get values if there is a sibling
        // if ($('.siblings-expanded-3').css('display') != 'none') {
        //     var sibling3Name = $('#sibling3-first-name').val();
        //     var sibling3MiddleName = $('#sibling3-middle-name').val();
        //     var sibling3LastName = $('#sibling3-last-name').val();
        //     var sibling3Gender = $('#sibling3-gender').val();
        //     var sibling3Birthday = new Date($('#sibling3-birthday-year').val(), $('#sibling3-birthday-month').val() - 1, $('#sibling3-birthday-day').val());
        //     var sibling3Occupation = $('#sibling3-occupation').val();
        //     var sibling3Sponsored = $('#sibling3-is-sponsored').val();
        // }
        // //sibling 4 - only get values if there is a sibling
        // if ($('.siblings-expanded-4').css('display') != 'none') {
        //     var sibling4Name = $('#sibling4-first-name').val();
        //     var sibling4MiddleName = $('#sibling4-middle-name').val();
        //     var sibling4LastName = $('#sibling4-last-name').val();
        //     var sibling4Gender = $('#sibling4-gender').val();
        //     var sibling4Birthday = new Date($('#sibling4-birthday-year').val(), $('#sibling4-birthday-month').val() - 1, $('#sibling4-birthday-day').val());
        //     var sibling4Occupation = $('#sibling4-occupation').val();
        //     var sibling4Sponsored = $('#sibling4-is-sponsored').val();
        // }
        // //sibling 5 - only get values if there is a sibling
        // if ($('.siblings-expanded-5').css('display') != 'none') {
        //     var sibling5Name = $('#sibling5-first-name').val();
        //     var sibling5MiddleName = $('#sibling5-middle-name').val();
        //     var sibling5LastName = $('#sibling5-last-name').val();
        //     var sibling5Gender = $('#sibling5-gender').val();
        //     var sibling5Birthday = new Date($('#sibling5-birthday-year').val(), $('#sibling5-birthday-month').val() - 1, $('#sibling5-birthday-day').val());
        //     var sibling5Occupation = $('#sibling5-occupation').val();
        //     var sibling5Sponsored = $('#sibling5-is-sponsored').val();
        // }
        // //sibling 6 - only get values if there is a sibling
        // if ($('.siblings-expanded-6').css('display') != 'none') {
        //     var sibling6Name = $('#sibling6-first-name').val();
        //     var sibling6MiddleName = $('#sibling6-middle-name').val();
        //     var sibling6LastName = $('#sibling6-last-name').val();
        //     var sibling6Gender = $('#sibling6-gender').val();
        //     var sibling6Birthday = new Date($('#sibling6-birthday-year').val(), $('#sibling6-birthday-month').val() - 1, $('#sibling6-birthday-day').val());
        //     var sibling6Occupation = $('#sibling6-occupation').val();
        //     var sibling6Sponsored = $('#sibling6-is-sponsored').val();
        // }
        // //sibling 7 - only get values if there is a sibling
        // if ($('.siblings-expanded-7').css('display') != 'none') {
        //     var sibling7Name = $('#sibling7-first-name').val();
        //     var sibling7MiddleName = $('#sibling7-middle-name').val();
        //     var sibling7LastName = $('#sibling7-last-name').val();
        //     var sibling7Gender = $('#sibling7-gender').val();
        //     var sibling7Birthday = new Date($('#sibling7-birthday-year').val(), $('#sibling7-birthday-month').val() - 1, $('#sibling7-birthday-day').val());
        //     var sibling7Occupation = $('#sibling7-occupation').val();
        //     var sibling7Sponsored = $('#sibling7-is-sponsored').val();
        // }
        // //sibling 8 - only get values if there is a sibling
        // if ($('.siblings-expanded-8').css('display') != 'none') {
        //     var sibling8Name = $('#sibling8-first-name').val();
        //     var sibling8MiddleName = $('#sibling8-middle-name').val();
        //     var sibling8LastName = $('#sibling8-last-name').val();
        //     var sibling8Gender = $('#sibling8-gender').val();
        //     var sibling8Birthday = new Date($('#sibling8-birthday-year').val(), $('#sibling8-birthday-month').val() - 1, $('#sibling8-birthday-day').val());
        //     var sibling8Occupation = $('#sibling8-occupation').val();
        //     var sibling8Sponsored = $('#sibling8-is-sponsored').val();
        // }
        // //sibling 9 - only get values if there is a sibling
        // if ($('.siblings-expanded-9').css('display') != 'none') {
        //     var sibling9Name = $('#sibling9-first-name').val();
        //     var sibling9MiddleName = $('#sibling9-middle-name').val();
        //     var sibling9LastName = $('#sibling9-last-name').val();
        //     var sibling9Gender = $('#sibling9-gender').val();
        //     var sibling9Birthday = new Date($('#sibling9-birthday-year').val(), $('#sibling9-birthday-month').val() - 1, $('#sibling9-birthday-day').val());
        //     var sibling9Occupation = $('#sibling9-occupation').val();
        //     var sibling9Sponsored = $('#sibling9-is-sponsored').val();
        // }
        // //sibling 10 - only get values if there is a sibling
        // if ($('.siblings-expanded-10').css('display') != 'none') {
        //     var sibling10Name = $('#sibling10-first-name').val();
        //     var sibling10MiddleName = $('#sibling10-middle-name').val();
        //     var sibling10LastName = $('#sibling10-last-name').val();
        //     var sibling10Gender = $('#sibling10-gender').val();
        //     var sibling10Birthday = new Date($('#sibling10-birthday-year').val(), $('#sibling10-birthday-month').val() - 1, $('#sibling10-birthday-day').val());
        //     var sibling10Occupation = $('#sibling10-occupation').val();
        //     var sibling10Sponsored = $('#sibling10-is-sponsored').val();
        // }
        // //sibling 11 - only get values if there is a sibling
        // if ($('.siblings-expanded-11').css('display') != 'none') {
        //     var sibling11Name = $('#sibling11-first-name').val();
        //     var sibling11MiddleName = $('#sibling11-middle-name').val();
        //     var sibling11LastName = $('#sibling11-last-name').val();
        //     var sibling11Gender = $('#sibling11-gender').val();
        //     var sibling11Birthday = new Date($('#sibling11-birthday-year').val(), $('#sibling11-birthday-month').val() - 1, $('#sibling11-birthday-day').val());
        //     var sibling11Occupation = $('#sibling11-occupation').val();
        //     var sibling11Sponsored = $('#sibling11-is-sponsored').val();
        // }
        // //sibling 12 - only get values if there is a sibling
        // if ($('.siblings-expanded-12').css('display') != 'none') {
        //     var sibling12Name = $('#sibling12-first-name').val();
        //     var sibling12MiddleName = $('#sibling12-middle-name').val();
        //     var sibling12LastName = $('#sibling12-last-name').val();
        //     var sibling12Gender = $('#sibling12-gender').val();
        //     var sibling12Birthday = new Date($('#sibling12-birthday-year').val(), $('#sibling12-birthday-month').val() - 1, $('#sibling12-birthday-day').val());
        //     var sibling12Occupation = $('#sibling12-occupation').val();
        //     var sibling12Sponsored = $('#sibling12-is-sponsored').val();
        // }
        // //sibling 13 - only get values if there is a sibling
        // if ($('.siblings-expanded-13').css('display') != 'none') {
        //     var sibling13Name = $('#sibling13-first-name').val();
        //     var sibling13MiddleName = $('#sibling13-middle-name').val();
        //     var sibling13LastName = $('#sibling13-last-name').val();
        //     var sibling13Gender = $('#sibling13-gender').val();
        //     var sibling13Birthday = new Date($('#sibling13-birthday-year').val(), $('#sibling13-birthday-month').val() - 1, $('#sibling13-birthday-day').val());
        //     var sibling13Occupation = $('#sibling13-occupation').val();
        //     var sibling13Sponsored = $('#sibling13-is-sponsored').val();
        // }
        // //sibling 14 - only get values if there is a sibling
        // if ($('.siblings-expanded-14').css('display') != 'none') {
        //     var sibling14Name = $('#sibling14-first-name').val();
        //     var sibling14MiddleName = $('#sibling14-middle-name').val();
        //     var sibling14LastName = $('#sibling14-last-name').val();
        //     var sibling14Gender = $('#sibling14-gender').val();
        //     var sibling14Birthday = new Date($('#sibling14-birthday-year').val(), $('#sibling14-birthday-month').val() - 1, $('#sibling14-birthday-day').val());
        //     var sibling14Occupation = $('#sibling14-occupation').val();
        //     var sibling14Sponsored = $('#sibling14-is-sponsored').val();
        // }
        // //sibling 15 - only get values if there is a sibling
        // if ($('.siblings-expanded-15').css('display') != 'none') {
        //     var sibling15Name = $('#sibling15-first-name').val();
        //     var sibling15MiddleName = $('#sibling15-middle-name').val();
        //     var sibling15LastName = $('#sibling15-last-name').val();
        //     var sibling15Gender = $('#sibling15-gender').val();
        //     var sibling15Birthday = new Date($('#sibling15-birthday-year').val(), $('#sibling15-birthday-month').val() - 1, $('#sibling15-birthday-day').val());
        //     var sibling15Occupation = $('#sibling15-occupation').val();
        //     var sibling15Sponsored = $('#sibling15-is-sponsored').val();
        // }

        // var data = { };
        // var allInputs = $( "input" );
        // console.log("Found " + allInputs.length);
        // $( "input" ).each(function() {
        //     if ($(this).val() != '') {
        //         data[$(this).attr("name")] = $(this).val();
        //     }
        // });
        // console.log(data);

        // define the request
        $.ajax({
            url: '/api/v1/child/insert',
            type: 'POST',
            data: data,
            success: function(res) {
                alert('niño inserta');
                location.reload();
                $('#child-submit').prop('disabled', true);
            },
            error: function(httpObj) {
                alert('que había un problema de insertar el niño');
            }
        });
    });

    $('#clear-form').click(function() {
        location.reload();
    });

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

    $('#education-button').click(function() {
        if ($('.education-expanded').css('display') == 'none') {
            $('.education-expanded').show();
            $('#education-button').html('Hide Education');
        } else {
            $('.education-expanded').hide();
            $('#education-button').html('Show Education');
        }
    });

    $('#health-button').click(function() {
        if ($('.health-expanded').css('display') == 'none') {
            $('.health-expanded').show();
            $('#health-button').html('Hide Health');
        } else {
            $('.health-expanded').hide();
            $('#health-button').html('Show Health');
        }
    });

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
