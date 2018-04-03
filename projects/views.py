from django.shortcuts import render
from django.core.paginator import Paginator

from .models import Project

def index(request):
    context_dict = {}

    # Grab all the projects by date added.
    projects = Project.objects.all().order_by('-date');
    context_dict['projects'] = projects

    return render(request, 'projects/index.html', context_dict)
