from django.db import models
from django.utils import timezone
from django.template.defaultfilters import slugify

class Project(models.Model):
    title = models.CharField(max_length=25, unique=True)
    date = models.DateTimeField(default=timezone.now)
    description = models.TextField()
    thumbnail = models.ImageField(upload_to='projects/project_images',
                                  blank=True)
    video_id = models.CharField(max_length=25,
                                blank=True,
                                help_text='Youtube video ID.')
    link_github = models.URLField(blank=True)
    link_itchio = models.URLField(blank=True)
    slug = models.SlugField(unique=True, blank=True)

    def get_thumbnail(self):
        if self.thumbnail and hasattr(self.thumbnail, 'url'):
            return self.thumbnail.url
        else:
            return '/static/images/default_logo.jpg'

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Project, self).save(*args, **kwargs)

    def __str__(self):
        return self.title
