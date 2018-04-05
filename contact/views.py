from django.shortcuts import render
from django.core.mail import send_mail
from django.http import HttpResponseRedirect
from django.urls import reverse

from .forms import EmailForm
from decouple import config, Csv

def contact(request):
    # If it is a POST request process the form data.
    if request.method == 'POST':
        # Create a form instance and populate it with data from the POST
        # request.
        form = EmailForm(request.POST)
        if form.is_valid():
            # Process the form.cleaned_data as needed.
            data = form.cleaned_data
            full_name = data['first_name'] + ' ' + data['last_name']
            text_content = ('Full Name: %s\n'
                            'Email: %s\n'
                            'Subject: %s\n'
                            'Message: %s' %(full_name,
                                            data['email'],
                                            data['subject'],
                                            data['message']))

            # Send the email.
            send_mail('Games Enquiry - ' + full_name,
                      text_content,
                      config('EMAIL_HOST_USER', default=''),
                      config('EMAIL_RECIPIENTS', cast=Csv()))

            print('WHOOP')

            # Redirect to thank you page.
            return HttpResponseRedirect()
    else:
        # The request if a GET or other method so create a blank form.
        form = EmailForm()
    return render(request, 'contact/contact.html', {'form': form})
