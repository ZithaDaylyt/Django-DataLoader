from django.shortcuts import render
from django.views.generic import View, TemplateView
from .models import *
from django.http import JsonResponse
# Create your views here.

# def home(request):
#     return render(request, 'posts/home.html',{})

class MainView(TemplateView):
    template_name = 'posts/home.html'

class PostJsonListView(View):
    def get(self, *args, **kwargs):
        print(kwargs)
        upper = kwargs.get('num_post')#3
        lower = upper - 3 #0
        posts = list(Post.objects.values()[lower:upper])
        posts_size = len(Post.objects.all())
        size = True if upper >= posts_size else False
        return JsonResponse({'data': posts, 'max': size}, safe = False)
