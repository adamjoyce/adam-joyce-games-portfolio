from django.shortcuts import render
from django.http import HttpResponse
from django.conf import settings

def about(request):
    return render(request, 'about.html')

def cv(request):
    with open(settings.MEDIA_ROOT + '/pdf/adam_joyce_cv_v5.pdf', 'rb') as pdf:
        response = HttpResponse(pdf.read(), content_type='application/pdf')
        response['Content-Disposition'] = ('inline;'
                                           'filename=adam_joyce_cv_v5.pdf')
        return response
