# Bootstrap (Breakpoints)

        comfortably hold containers whose widths are multiples of 12
        Bootstrap is developed to be mobile first
        - Extra small        xs     < 576px   (default)
        - Small              sm     ≥ 576px
        - Medium             md     ≥ 768px
        - Large              lg     ≥ 992px
        - Extra Large        xl     ≥ 1200px
        - Extra Extra Large  xxl    ≥ 1400px

# Containers

      .container        >>  fixed width container
      .container-fluid  >>  full width container
      .container-sm     >>  <576px  → full width      ≥576px → fixed (540px)
      .container-md     >>  <768px  → full width      ≥768px → fixed (720px)
      .container-lg     >>  <992px  → full width      ≥992px → fixed (960px)
      .container-xl     >>  <1200px → full width      ≥1200px → fixed (1140px)
      .container-xxl    >>  <1400px → full width      ≥1400px → fixed (1320px)

# Typography

  `Bootstrap 5 uses a default font-size of 1rem (16px by default), and its line-height is 1.5. all <p> elements have margin-top: 0 and margin-bottom: 1rem (16px by default).`


## Display headings

        h1 , h2 , h3 , h4 , h5 , h6

          .h1
          .h2
          .h3
          .h4
          .h5
          .h6

          .display-1
          .display-2
          .display-3
          .display-4
          .display-5
          .display-6

## Inline text elements

        .mark
        .small
        .text-decoration-underline
        .text-decoration-line-through





# Padding and (Paddding Responsive)

- ### | p{direction}-{size} |

---

    - (( Direction ))

      - p     Padding
      - pt    padding-top
      - pb    padding-bottom
      - ps    padding-start
      - pe    padding-end
      - px    padding (left & Right)
      - py    padding (up & Down)

    - (( Size ))

      - 0 =  0
      - 1 =  0.25rem
      - 2 =  0.5rem
      - 3 =  1rem
      - 4 =  1.5rem
      - 5 =  3rem

    Ex

      - class="p-3"
      - class="pt-4"
      - class="px-2"
      - class="py-5"

- ### | Paddding Responsive |

---

    EX

      <div class="p-2 p-md-4 p-lg-5">
        Responsive Padding
      </div>

      Mobile p-2      Tablet p-md-4       Desktop p-lg-5

# Margin and (Margin Responsive)

- ### | m{direction}-{size} |

---

    - (( Direction ))

      - m     Margin
      - mt    Margin-top
      - mb    Margin-bottom
      - ms    Margin-start
      - me    Margin-end
      - mx    Margin (left & Right)
      - my    Margin (up & Down)

    - (( Size ))

      - 0 =  0
      - 1 =  0.25rem
      - 2 =  0.5rem
      - 3 =  1rem
      - 4 =  1.5rem
      - 5 =  3rem

    Ex

      - class="m-3"
      - class="mt-4"
      - class="mx-2"
      - class="my-5"

- ### | Margin Responsive |

---

    EX

      <div class="m-2 m-md-4 m-lg-5">
        Responsive Margin
      </div>

      Mobile m-2      Tablet m-md-4       Desktop m-lg-5

# Background

## bg-{color}

| Class            | Color Meaning                |
| ---------------- | ---------------------------- |
| `bg-primary`     | Blue (default theme primary) |
| `bg-secondary`   | Gray (secondary)             |
| `bg-success`     | Green                        |
| `bg-danger`      | Red                          |
| `bg-warning`     | Yellow                       |
| `bg-info`        | Light Blue                   |
| `bg-light`       | Light Gray                   |
| `bg-dark`        | Dark Gray / Black            |
| `bg-white`       | White                        |
| `bg-transparent` | Transparent                  |

    EX

    <div class="m-2 m-md-4 m-lg-5 bg-danger text-white p-5">
      <h1>Responsive Margin</h1>
    </div>


# Text Color

| Class            | Color Meaning                              |
| ---------------- | ------------------------------------------ |
| `text-primary`   | Primary color                              |
| `text-secondary` | Secondary color                            |
| `text-success`   | Green                                      |
| `text-danger`    | Red                                        |
| `text-warning`   | Yellow / Orange                            |
| `text-info`      | Light blue / Cyan                          |
| `text-light`     | Light gray / White                         |
| `text-dark`      | Dark gray / Black                          |
| `text-body`      | Default body color                         |
| `text-muted`     | Light gray / muted color                   |
| `text-white`     | White                                      |


# text-bg-color

| Class               | Result                            |
| ------------------- | --------------------------------- |
| `text-bg-primary`   | Blue background + white text      |
| `text-bg-secondary` | Gray background + white text      |
| `text-bg-success`   | Green background + white text     |
| `text-bg-danger`    | Red background + white text       |
| `text-bg-warning`   | Yellow background + dark text     |
| `text-bg-info`      | Light blue background + dark text |
| `text-bg-light`     | Light background + dark text      |
| `text-bg-dark`      | Dark background + white text      |
