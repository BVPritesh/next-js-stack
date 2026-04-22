"use client";

import Link from "next/link";
import Button from "../components/button/button";
import "./style-guide.css";

export default function StyleGuide() {
  const colors = [
    { name: "Primary", code: "#4f46e5", class: "color-swatch-primary" },
    { name: "Secondary", code: "#6b7280", class: "color-swatch-secondary" },
    { name: "Text", code: "#171717", class: "color-swatch-text" },
    { name: "Forms", code: "#ffffff", class: "color-swatch-forms" },
    { name: "Error", code: "#dc2626", class: "color-swatch-error" },
    { name: "Warning", code: "#f59e0b", class: "color-swatch-warning" },
    { name: "Success", code: "#10b981", class: "color-swatch-success" },
    { name: "Info", code: "#3b82f6", class: "color-swatch-info" },
    { name: "Background", code: "#f9fafb", class: "color-swatch-background" },
  ];

  const fontFamilies = [
    {
      name: "Poppins",
      usage: "Headings (h1, h2, h3, h4, h5, h6)",
      sample: "The quick brown fox jumps over the lazy dog",
      cssVar: "--font-poppins",
      className: "font-poppins-sample",
    },
    {
      name: "Inter",
      usage: "Body text, Paragraphs",
      sample: "The quick brown fox jumps over the lazy dog",
      cssVar: "--font-inter",
      className: "font-inter-sample",
    },
  ];

  const headingTypes = [
    {
      tag: "h1",
      desktopSize: "48px",
      ipadSize: "40px",
      mobileSize: "32px",
      sample: "Heading 1",
      weight: "700",
    },
    {
      tag: "h2",
      desktopSize: "36px",
      ipadSize: "32px",
      mobileSize: "28px",
      sample: "Heading 2",
      weight: "700",
    },
    {
      tag: "h3",
      desktopSize: "30px",
      ipadSize: "28px",
      mobileSize: "24px",
      sample: "Heading 3",
      weight: "700",
    },
    {
      tag: "h4",
      desktopSize: "24px",
      ipadSize: "22px",
      mobileSize: "20px",
      sample: "Heading 4",
      weight: "600",
    },
    {
      tag: "h5",
      desktopSize: "20px",
      ipadSize: "18px",
      mobileSize: "16px",
      sample: "Heading 5",
      weight: "600",
    },
    {
      tag: "h6",
      desktopSize: "16px",
      ipadSize: "16px",
      mobileSize: "14px",
      sample: "Heading 6",
      weight: "600",
    },
  ];

  return (
    <div className="style-guide-container">
      <h1>Style Guide</h1>

      {/* Colors Section */}
      <section className="style-guide-section">
        <h2>Colors</h2>
        <div className="colors-grid">
          {colors.map((color) => (
            <div key={color.code} className="color-card">
              <div className={`color-swatch ${color.class}`} />
              <div className="color-info">
                <div className="color-name">{color.name}</div>
                <div className="color-code">{color.code}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Font Family Section */}
      <section className="style-guide-section">
        <h2>Font Families</h2>
        <div className="font-family-list">
          {fontFamilies.map((font) => (
            <div key={font.name} className="font-family-item">
              <h3>{font.name}</h3>
              <div className="font-details">
                <strong>Usage:</strong> {font.usage}
              </div>
              <div className="font-details">
                <strong>CSS Variable:</strong> <code>var({font.cssVar})</code>
              </div>
              <div className={`font-family-sample ${font.className}`}>
                {font.sample}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Typography Section */}
      <section className="style-guide-section">
        <h2>Typography</h2>
        <div className="typography-section">
          <h3>Headings & Text Sizes</h3>
          <p>
            Font sizes are responsive and adjust based on screen size (Desktop,
            iPad, Mobile).
          </p>

          <table className="typography-table">
            <thead>
              <tr>
                <th>Element</th>
                <th>Desktop</th>
                <th>iPad</th>
                <th>Mobile</th>
                <th>Weight</th>
                <th>Sample</th>
              </tr>
            </thead>
            <tbody>
              {headingTypes.map((heading) => (
                <tr key={heading.tag}>
                  <td>
                    <strong>&lt;{heading.tag}&gt;</strong>
                  </td>
                  <td>{heading.desktopSize}</td>
                  <td>{heading.ipadSize}</td>
                  <td>{heading.mobileSize}</td>
                  <td>{heading.weight}</td>
                  <td>
                    <div className={`typography-sample ${heading.tag}`}>
                      {heading.sample}
                    </div>
                  </td>
                </tr>
              ))}
              <tr>
                <td>
                  <strong>Body</strong>
                </td>
                <td>16px</td>
                <td>16px</td>
                <td>14px</td>
                <td>400</td>
                <td>
                  <div className="typography-sample body">Body text sample</div>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Paragraph</strong>
                </td>
                <td>16px</td>
                <td>16px</td>
                <td>14px</td>
                <td>400</td>
                <td>
                  <div className="typography-sample paragraph">
                    Paragraph sample
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Small</strong>
                </td>
                <td>12px</td>
                <td>12px</td>
                <td>12px</td>
                <td>400</td>
                <td>
                  <div className="typography-sample small">Small text</div>
                </td>
              </tr>
            </tbody>
          </table>

          <h3 style={{ marginTop: "30px" }}>Responsive Font Size Guidelines</h3>
          <div className="responsive-font-sizes">
            <div className="responsive-item">
              <h4>Desktop (≥1024px)</h4>
              <ul>
                <li>
                  <span className="responsive-label">H1:</span> 48px
                </li>
                <li>
                  <span className="responsive-label">H2:</span> 36px
                </li>
                <li>
                  <span className="responsive-label">H3:</span> 30px
                </li>
                <li>
                  <span className="responsive-label">Body:</span> 16px
                </li>
              </ul>
            </div>
            <div className="responsive-item">
              <h4>iPad (768px - 1023px)</h4>
              <ul>
                <li>
                  <span className="responsive-label">H1:</span> 40px
                </li>
                <li>
                  <span className="responsive-label">H2:</span> 32px
                </li>
                <li>
                  <span className="responsive-label">H3:</span> 28px
                </li>
                <li>
                  <span className="responsive-label">Body:</span> 16px
                </li>
              </ul>
            </div>
            <div className="responsive-item">
              <h4>Mobile (&lt;768px)</h4>
              <ul>
                <li>
                  <span className="responsive-label">H1:</span> 32px
                </li>
                <li>
                  <span className="responsive-label">H2:</span> 28px
                </li>
                <li>
                  <span className="responsive-label">H3:</span> 24px
                </li>
                <li>
                  <span className="responsive-label">Body:</span> 14px
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className="style-guide-section">
        <h2>Components</h2>

        {/* Button Component */}
        <div className="component-showcase">
          <h3>Button Component</h3>
          <p>Reusable button component with multiple variants, sizes, and states.</p>

          <div className="component-section">
            <h4>Primary Buttons</h4>
            <div className="button-grid">
              <div className="button-demo">
                <Button variant="primary" style="fill">
                  Primary Fill
                </Button>
              </div>
              <div className="button-demo">
                <Button variant="primary" style="outline">
                  Primary Outline
                </Button>
              </div>
              <div className="button-demo">
                <Button variant="primary" style="fill" disabled>
                  Disabled
                </Button>
              </div>
              <div className="button-demo">
                <Button variant="primary" style="fill" isLoading>
                  Loading
                </Button>
              </div>
            </div>
          </div>

          <div className="component-section">
            <h4>Secondary Buttons</h4>
            <div className="button-grid">
              <div className="button-demo">
                <Button variant="secondary" style="fill">
                  Secondary Fill
                </Button>
              </div>
              <div className="button-demo">
                <Button variant="secondary" style="outline">
                  Secondary Outline
                </Button>
              </div>
              <div className="button-demo">
                <Button variant="secondary" style="fill" disabled>
                  Disabled
                </Button>
              </div>
              <div className="button-demo">
                <Button variant="secondary" style="fill" isLoading>
                  Loading
                </Button>
              </div>
            </div>
          </div>

          <div className="component-section">
            <h4>Default Buttons</h4>
            <div className="button-grid">
              <div className="button-demo">
                <Button variant="default" style="fill">
                  Default Fill
                </Button>
              </div>
              <div className="button-demo">
                <Button variant="default" style="outline">
                  Default Outline
                </Button>
              </div>
              <div className="button-demo">
                <Button variant="default" style="fill" disabled>
                  Disabled
                </Button>
              </div>
              <div className="button-demo">
                <Button variant="default" style="fill" isLoading>
                  Loading
                </Button>
              </div>
            </div>
          </div>

          <div className="component-section">
            <h4>Button Sizes</h4>
            <div className="button-grid">
              <div className="button-demo">
                <Button variant="primary" style="fill" size="sm">
                  Small
                </Button>
              </div>
              <div className="button-demo">
                <Button variant="primary" style="fill" size="md">
                  Medium
                </Button>
              </div>
              <div className="button-demo">
                <Button variant="primary" style="fill" size="lg">
                  Large
                </Button>
              </div>
            </div>
          </div>

          <div className="component-section">
            <h4>Full Width Button</h4>
            <div className="button-demo">
              <Button variant="primary" style="fill" fullWidth>
                Full Width Button
              </Button>
            </div>
          </div>

          <div className="component-section">
            <h4>Button Usage Example</h4>
            <div className="button-demo">
                {/* Basic button */}
                <Button variant="primary">Click Me</Button>

                {/* With custom handlers */}
                <Button 
                    variant="primary" 
                    style="fill"
                    onClick={() => console.log('Clicked!')}
                >
                    Submit
                </Button>

                {/* Loading state */}
                <Button 
                    variant="secondary" 
                    isLoading
                >
                    Loading...
                </Button>

                {/* Disabled */}
                <Button 
                    variant="default" 
                    disabled
                >
                    Disabled
                </Button>

                {/* Full width */}
                <Button 
                    variant="primary" 
                    fullWidth
                    size="lg"
                >
                    Large Full Width
                </Button>
            </div>
          </div>

          <div className="component-section">
            <h4>Available Props</h4>
            <table className="props-table">
              <thead>
                <tr>
                  <th>Prop</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>variant</td>
                  <td>"primary" | "secondary" | "default"</td>
                  <td>"default"</td>
                  <td>Button style variant</td>
                </tr>
                <tr>
                  <td>style</td>
                  <td>"fill" | "outline"</td>
                  <td>"fill"</td>
                  <td>Button fill type</td>
                </tr>
                <tr>
                  <td>size</td>
                  <td>"sm" | "md" | "lg"</td>
                  <td>"md"</td>
                  <td>Button size</td>
                </tr>
                <tr>
                  <td>fullWidth</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Make button full width</td>
                </tr>
                <tr>
                  <td>isLoading</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Show loading state</td>
                </tr>
                <tr>
                  <td>disabled</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Disable the button</td>
                </tr>
                <tr>
                  <td>icon</td>
                  <td>ReactNode</td>
                  <td>undefined</td>
                  <td>Icon to display</td>
                </tr>
                <tr>
                  <td>iconPosition</td>
                  <td>"left" | "right"</td>
                  <td>"left"</td>
                  <td>Icon placement</td>
                </tr>
                <tr>
                  <td>onClick</td>
                  <td>function</td>
                  <td>undefined</td>
                  <td>Click handler</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="style-guide-footer">
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
