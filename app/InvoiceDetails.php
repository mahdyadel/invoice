<?php

namespace App;
use App\Invoice;

use Illuminate\Database\Eloquent\Model;

class InvoiceDetails extends Model
{
    protected $guarded = []; 

    public function invoice(){
        return $this->belongsTo(Invoice::class , 'invoice_id' , 'id');
    }

    public function unitText(){

        if($this->unit == 'pices'){
            $text = __('frontend/frontend.pices');
        }elseif($this->unit == 'g'){
            $text = __('frontend/frontend.gram');
        }elseif($this->unit == 'kg'){
            $text = __('frontend/frontend.kilo_gram');
    }
    return $text;
 }
}
