from django import forms

class EmailForm(forms.Form):
    first_name = forms.CharField(
        label='Name ',
        label_suffix='*',
        max_length=25,
        help_text='First Name'
    )
    last_name = forms.CharField(
        label='',
        label_suffix='',
        max_length=25,
        help_text='Last Name'
    )
    email = forms.EmailField(
        label='Email Address ',
        label_suffix='*',
        max_length=50
    )
    subject = forms.CharField(
        label='Subject ',
        label_suffix='*',
        max_length=100
    )
    message = forms.CharField(
        label='Message ',
        label_suffix='*',
        widget=forms.Textarea()
    )
