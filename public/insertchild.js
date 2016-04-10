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
        if ($('#child-birthday-year').val() != '') {
            data['cumpleaños'] = new Date($('#child-birthday-year').val(), $('#child-birthday-month').val() - 1, $('#child-birthday-day').val());
        }
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
        if (!jQuery.isEmptyObject(parent1)) {
            data.parents.push(parent1);
            data.parents[0]['cumpleaños'] = new Date($('#parent1-birthday-year').val(), $('#parent1-birthday-month').val() - 1, $('#parent1-birthday-day').val());
        }

        var parent2 = { };
        var parent2Inputs = $( ':input', '.parents-expanded-2' );
        parent2Inputs.each(function() {
            if ($(this).val() != '') {
                parent2[$(this).attr("name")] = $(this).val();
            }
        });
        if (!jQuery.isEmptyObject(parent2)) {
            data.parents.push(parent2);
            data.parents[1]['cumpleaños'] = new Date($('#parent2-birthday-year').val(), $('#parent2-birthday-month').val() - 1, $('#parent2-birthday-day').val());
        }

        data.siblings = [];
        var sibling1 = { };
        var sibling1Inputs = $( ':input', '.siblings-expanded-1' );
        sibling1Inputs.each(function() {
            if ($(this).val() != '') {
                sibling1[$(this).attr("name")] = $(this).val();
            }
        });
        if (!jQuery.isEmptyObject(sibling1)) {
            data.siblings.push(sibling1);
            data.siblings[0]['cumpleaños'] = new Date($('#sibling1-birthday-year').val(), $('#sibling1-birthday-month').val() - 1, $('#sibling1-birthday-day').val());
        }

        var sibling2 = { };
        var sibling2Inputs = $( ':input', '.siblings-expanded-2' );
        sibling2Inputs.each(function() {
            if ($(this).val() != '') {
                sibling2[$(this).attr("name")] = $(this).val();
            }
        });
        if (!jQuery.isEmptyObject(sibling2)) {
            data.siblings.push(sibling2);
            data.siblings[1]['cumpleaños'] = new Date($('#sibling2-birthday-year').val(), $('#sibling2-birthday-month').val() - 1, $('#sibling2-birthday-day').val());
        }

        var sibling3 = { };
        var sibling3Inputs = $( ':input', '.siblings-expanded-3' );
        sibling3Inputs.each(function() {
            if ($(this).val() != '') {
                sibling3[$(this).attr("name")] = $(this).val();
            }
        });
        if (!jQuery.isEmptyObject(sibling3)) {
            data.siblings.push(sibling3);
            data.siblings[2]['cumpleaños'] = new Date($('#sibling3-birthday-year').val(), $('#sibling3-birthday-month').val() - 1, $('#sibling3-birthday-day').val());
        }

        var sibling4 = { };
        var sibling4Inputs = $( ':input', '.siblings-expanded-4' );
        sibling4Inputs.each(function() {
            if ($(this).val() != '') {
                sibling4[$(this).attr("name")] = $(this).val();
            }
        });
        if (!jQuery.isEmptyObject(sibling4)) {
            data.siblings.push(sibling4);
            data.siblings[3]['cumpleaños'] = new Date($('#sibling4-birthday-year').val(), $('#sibling4-birthday-month').val() - 1, $('#sibling4-birthday-day').val());
        }

        var sibling5 = { };
        var sibling5Inputs = $( ':input', '.siblings-expanded-5' );
        sibling5Inputs.each(function() {
            if ($(this).val() != '') {
                sibling5[$(this).attr("name")] = $(this).val();
            }
        });
        if (!jQuery.isEmptyObject(sibling5)) {
            data.siblings.push(sibling5);
            data.siblings[4]['cumpleaños'] = new Date($('#sibling5-birthday-year').val(), $('#sibling5-birthday-month').val() - 1, $('#sibling5-birthday-day').val());
        }

        var sibling6 = { };
        var sibling6Inputs = $( ':input', '.siblings-expanded-6' );
        sibling6Inputs.each(function() {
            if ($(this).val() != '') {
                sibling6[$(this).attr("name")] = $(this).val();
            }
        });
        if (!jQuery.isEmptyObject(sibling6)) {
            data.siblings.push(sibling6);
            data.siblings[5]['cumpleaños'] = new Date($('#sibling6-birthday-year').val(), $('#sibling6-birthday-month').val() - 1, $('#sibling6-birthday-day').val());
        }

        // define the request
        $.ajax({
            url: '/api/v1/child/insert',
            type: 'POST',
            data: data,
            success: function(res) {
                alert('niño inserta');
                location.reload();
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
        if (numSiblings >= 6) {
            $('#add-a-sibling').hide();
        }
        $('.siblings-expanded-' + numSiblings).show();
        numSiblings++;
        $('#remove-a-sibling').show();
    });

    $('#remove-a-sibling').click(function() {
        numSiblings--;
        $('#sibling' + numSiblings +'-first-name').val('');
        $('#sibling' + numSiblings +'-middle-name').val('');
        $('#sibling' + numSiblings +'-last-name').val('');
        $('#sibling' + numSiblings +'-gender').val('');
        $('.siblings-expanded-' + numSiblings).hide();
        $('#add-a-sibling').show();
        if (numSiblings <= 1) {
            $('#remove-a-sibling').hide();
        }
    });

});
