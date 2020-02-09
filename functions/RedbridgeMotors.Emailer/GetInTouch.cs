using System.Text.Encodings.Web;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;
using SendGrid.Helpers.Mail;
using Microsoft.Extensions.Configuration;
using ExecutionContext = Microsoft.Azure.WebJobs.ExecutionContext;

namespace RedbridgeMotors.Emailer
{
    public static class GetInTouch
    {
        [FunctionName("get-in-touch")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)]GetInTouchRequest req,
            [SendGrid(ApiKey = "SendGridApiKey")] IAsyncCollector<SendGridMessage> messageCollector,
            ILogger log,
            CancellationToken cancellationToken,
            ExecutionContext context)
        {
            IConfigurationRoot config = new ConfigurationBuilder()
                .SetBasePath(context.FunctionAppDirectory)
                .AddJsonFile("local.settings.json", optional: true, reloadOnChange: true)
                .AddEnvironmentVariables()
                .Build();

            log.LogInformation("get-in-touch request received");

            var email = new SendGridMessage();
            email.AddTo(config["ToEmail"]);
            email.SetFrom(config["FromEmail"], "Redbridge Motors");
            email.SetSubject("New Enquiry Received - redbridgemotors.co.uk");
            email.AddContent("text/html",
@$"<strong>***Do NOT reply to this email - it won't go anywhere!***</strong><br />
<br />
New enquiry received from: {HtmlEncoder.Default.Encode(req.Name)}
<br />
Contact: {HtmlEncoder.Default.Encode(req.Contact)}
<br />
Message: {HtmlEncoder.Default.Encode(req.Message)}

<hr />
Redbridge Motor Co Ltd.");

            await messageCollector.AddAsync(email, cancellationToken);

            return new OkResult();
        }

        public class GetInTouchRequest
        {
            public string Name { get; set; }

            public string Message { get; set; }

            public string Contact { get; set; }
        }
    }
}
