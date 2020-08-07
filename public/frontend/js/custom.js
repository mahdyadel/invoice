 $(document).ready(function(){
        
       


            $('#invoice_details').on('keyup blur' , '.quantity' , function(){
                let $row = $(this).closest('tr');
                let quantity = $row.find('.quantity').val() || 0;
                let unit_price = $row.find('.unit_price').val() || 0;

                $row.find('.row_sub_total').val((quantity *  unit_price).toFixed(2))
                $('#sub_total').val(sum_total('.row_sub_total'));
                $('#vat_value').val(calculate_vat());
                $('#total_due').val(sum_due_total());
            });
            $('#invoice_details').on('keyup blur' , '.unit_price' , function(){
                let $row = $(this).closest('tr');
                let quantity = $row.find('.quantity').val() || 0;
                let unit_price = $row.find('.unit_price').val() || 0;

                $row.find('.row_sub_total').val((quantity *  unit_price).toFixed(2))
                $('#sub_total').val(sum_total('.row_sub_total'));

                $('#vat_value').val(calculate_vat());
                $('#total_due').val(sum_due_total());
            });
            $('#invoice_details').on('keyup blur' , '.discount_type' , function(){
             
                $('#vat_value').val(calculate_vat());
                $('#total_due').val(sum_due_total());
            });
            $('#invoice_details').on('keyup blur' , '.discount_value' , function(){
               
                $('#vat_value').val(calculate_vat());
                $('#total_due').val(sum_due_total());
            });
            $('#invoice_details').on('keyup blur' , '.shipping' , function(){
               
                $('#vat_value').val(calculate_vat());
                $('#total_due').val(sum_due_total());
            });
            let sum_total = function($selector){
                let sum = 0 ;
                $($selector).each(function(){
                    let selectorval = $(this).val() != '' ? $(this).val() : 0 ;
                    sum += parseFloat( selectorval);
                });
                return sum.toFixed(2);
            }
            let calculate_vat  = function(){
                let sub_totalval = $('.sub_total').val() || 0 ;
                let dicount_type =  $('.dicount_type').val();
                let discount_value = parseFloat($('.discount_value').val()) || 0 ;
                let discountval  = discount_value != 0 ? dicount_type == 'percentage'? sub_totalval * (discount_value / 100) : discount_value : 0 ;

                let vatval = (sub_totalval - discountval) * 0.05;

                return vatval.toFixed(2);
            }
            let sum_due_total = function(){
                let sum = 0;
                let sub_totalVal = $('.sub_total').val() || 0;
                let discount_type = $('.discount_type').val();
                let discount_value = parseFloat($('.discount_value').val()) || 0 ;
                let discountval  = discount_value != 0 ? dicount_type == 'percentage'? sub_totalval * (discount_value / 100) : discount_value : 0 ;

                let vatval = parseFloat($('.vat_value').val()) || 0 ;
                let shippinVal = parseFloat($('.shipping').val()) || 0 ;

                sum += sub_totalVal;
                sum -= discountval;
                sum += vatval;
                sum += shippinVal;

                return sum.toFixed(2);
            }

            $(document).on('click' , '.btn_add' , function(){

                let trCount = $('#invoice_details').find('tr.cloning_row:last').length;
                let numberIncr = trCount > 0 ? parseInt($('#invoice_details').find('tr.cloning_row:last').attr('id')) + 1 : 0;

                $('#invoice_details').find('tbody').append($(''+
                
                    '<tr class="cloning_row" id="' + numberIncr + '">'+
                    '<td><button class="btn btn-danger btn-sm delgated_btn"><i class="fa fa-minus"></i></button></td>'+
                    '<td><input type="text" name="product_name[' + numberIncr + ']"class="product_name form-control" ></td>'+
                    '<td><select name="unit[' + numberIncr + ']"  class="unit form-cotrol">'+
                            '<option></option>'+
                            '<option value="pices">Pices</option>'+
                            '<option value="g">Gram</option>'+
                            '<option value="kg">Kilo Gram</option>'+
                        '</select>'+
                    '</td>'+
                    '<td><input type="number"  name="quantity[' + numberIncr + ']" class="quantity form-control"></td>'+
                    '<td><input type="number"  name="unit_price[' + numberIncr + ']" class="unit_price form-control"></td>'+
                    '<td><input type="number"  name="row_sub_total[' + numberIncr + ']" class="row_sub_total form-control" readonly="readonly"></td>'+
                '</tr>'
                ))
            });

            $(document).on('click' , '.delgated_btn' , function(e){
                e.preventDefault();
                $(this).parent().parent().remove();
                $('#sub_total').val(sum_total('.row_sub_total'));
                $('#vat_value').val(calculate_vat());
                $('#total_due').val(sum_due_total());
            });
            $('form').on('submit', function (e) {
        $('input.product_name').each(function () { $(this).rules("add", { required: true }); });
        $('select.unit').each(function () { $(this).rules("add", { required: true }); });
        $('input.quantity').each(function () { $(this).rules("add", { required: true }); });
        $('input.unit_price').each(function () { $(this).rules("add", { required: true }); });
        $('input.row_sub_total').each(function () { $(this).rules("add", { required: true }); });
        e.preventDefault();
    });
    $('.pickdate').datepicker({
                format : 'yy/mm/dd',
                autoclose: true,
                todayHighlight: true
           });
    $('form').validate({
        rules: {
            'customer_name' : { required:true },
            'customer_email' : { required:true, email:true },
            'customer_mobile' : { required:true, digits: true, minlength: 10, maxlength: 14 },
            'company_name' : { required:true },
            'invoice_number' : { required:true, digits: true },
            'invoice_date' : { required:true },
        },
        submitHandler: function (form) {
            form.submit();
        }
    });

        });
