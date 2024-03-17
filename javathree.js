const path = "/users/download/index.html"

      const isHtml = path => {
        const requiredExit = ".html";
        const pathExit = path.slice(-5);

        if (pathExit == requiredExit) {
            return true
        } else {
            return false
        }
        }

      console.log(isHtml(path));