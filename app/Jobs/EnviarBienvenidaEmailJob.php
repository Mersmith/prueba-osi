<?php

namespace App\Jobs;

use App\Mail\BienvenidaMail;
use App\Models\Subscriber;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;
class EnviarBienvenidaEmailJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */

    protected $subscriberId;

    public function __construct($subscriberId)
    {
        $this->subscriberId = $subscriberId;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $subscriber = Subscriber::find($this->subscriberId);
        if ($subscriber) {
            Mail::to($subscriber->email)->send(new BienvenidaMail($subscriber));
        }
    }
}
