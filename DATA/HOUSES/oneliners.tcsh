ls | perl -nle 's/-/ /g; s/\.txt//i; s/\s+/ /g; print uc($_)'